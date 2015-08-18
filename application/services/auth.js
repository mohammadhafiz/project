application.factory('Auth', ['$http', '$q', '$window', 'API', 'Error', 'Settings',
    function($http, $q, $window, API, Error, Settings)
    {
        var auth = {};

        auth.forget = function()
        {
            var deferred = $q.defer();

            $window.localStorage.removeItem('expires_in');
            $window.localStorage.removeItem('access_token');
            $window.localStorage.removeItem('refresh_token');
            $window.localStorage.removeItem('token_type');

            deferred.resolve();

            return deferred.promise;
        };

        auth.handler = function(response)
        {
            $window.localStorage.expires_in      = response.data.expires_in;
            $window.localStorage.access_token    = response.data.access_token;
            $window.localStorage.refresh_token   = response.data.refresh_token;
            $window.localStorage.token_type      = response.data.token_type;
            return response;
        };

        auth.handle = function()
        {
            return auth.handler;
        };

        auth.isLogged = function()
        {
            return $window.localStorage.hasOwnProperty('expires_in') &&
                $window.localStorage.hasOwnProperty('access_token') &&
                $window.localStorage.hasOwnProperty('refresh_token') &&
                $window.localStorage.hasOwnProperty('token_type');
        };

        auth.refresh = function()
        {
            var data = {
                grant_type: 'refresh_token',
                client_id: Settings.client_id,
                client_secret: Settings.client_secret,
                scope: Settings.scopes.join(),
                refresh_token: $window.localStorage.refresh_token,
            };

            return $http.post(API.get('access_token'), data)
                .then(auth.handle())
                .catch(Error.handle());
        };

        auth.verify = function(credentials)
        {
            var data = {
                grant_type: 'password',
                client_id: Settings.client_id,
                client_secret: Settings.client_secret,
                scope: Settings.scopes.join(),
                username: credentials['username'],
                password: credentials['password'],
            };

            return $http.post(API.get('access_token'), data)
                .then(auth.handle())
                .catch(Error.handle());
        };

        return auth;
    }]);

application.factory('AuthInterceptor', ['$q', '$window',
    function($q, $window)
    {
        var authInterceptor = {};

        authInterceptor.request = function(config)
        {
            if ($window.localStorage.hasOwnProperty('expires_in') &&
                $window.localStorage.hasOwnProperty('access_token') &&
                $window.localStorage.hasOwnProperty('refresh_token') &&
                $window.localStorage.hasOwnProperty('token_type')) {

                var token_type = $window.localStorage.token_type;
                var access_token = $window.localStorage.access_token;
                config.headers.Authorization = token_type + ' ' + access_token;
            }

            return config;
        };

        authInterceptor.responseError = function(rejection)
        {
            console.error(rejection);
            return $q.reject(reject);
        };

        return authInterceptor;
    }]);
