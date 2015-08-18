application.controller('LoginController', ['$location', '$scope', 'Auth',
    function($location, $scope, Auth)
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
