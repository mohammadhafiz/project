application.controller('LoginController', ['$location', '$scope', 'Auth', 'isGuest',
    function($location, $scope, Auth, isGuest)
    {
        $scope.credentials = {
            username: '',
            password: '',
        };

        $scope.login = function(credentials)
        {
            Auth.verify(credentials)
                .then(function (session) {
                    $location.path('/modules');
                });
        };
    }]);
