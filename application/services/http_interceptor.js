application.factory('HttpInterceptor', ['$injector', '$q', '$translate', '$window',
    function($injector, $q, $translate, $window)
    {
        var refreshPromise = null;

        var httpInterceptor = {};

        httpInterceptor.request = function(config)
        {
            if ($injector.get('Auth').isLogged()) {
                var token_type = $window.localStorage.token_type;
                var access_token = $window.localStorage.access_token;
                config.headers.Authorization = token_type + ' ' + access_token;
            }

            return config;
        };

        httpInterceptor.responseError = function(rejection)
        {
            console.error(rejection);

            switch (rejection.status) {
                case 401:
                    refreshPromise = refreshPromise ? refreshPromise :
                        $injector.get('Auth').refresh();

                    return refreshPromise.finally(function()
                        {
                            refreshPromise = null;
                        })
                        .then(function()
                        {
                            return $injector.get('$http')(rejection.config);
                        });

                case 422:
                    $translate('toast_validation_failed')
                        .then(function(text)
                        {
                            var $mdToast = $injector.get('$mdToast');
                            var toast = $mdToast.simple()
                                .content(text)
                                .position('bottom left right');
                            $mdToast.show(toast);
                        });

                    return $q.reject(rejection);

                case 500:
                    if (rejection.data.message == 'The user credentials were incorrect.') {
                        $translate('toast_incorrect_credentials')
                            .then(function(text)
                            {
                                var $mdToast = $injector.get('$mdToast');
                                var toast = $mdToast.simple()
                                    .content(text)
                                    .position('bottom left right');
                                $mdToast.show(toast);
                            });

                        return $q.reject(rejection);
                    }

                    if (rejection.data.message == 'The refresh token is invalid.') {
                        $translate('toast_invalid_refresh_token')
                            .then(function(text)
                            {
                                var $mdToast = $injector.get('$mdToast');
                                var toast = $mdToast.simple()
                                    .content(text)
                                    .position('bottom left right');
                                $mdToast.show(toast);
                            });
                    }

                    $injector.get('Auth')
                        .forget();

                    return $q.reject(rejection);
            }
        };

        return httpInterceptor;
    }]);
