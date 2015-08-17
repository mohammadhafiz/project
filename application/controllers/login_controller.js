application.controller('LoginController', ['$location', '$scope', 'Auth',
    function($location, $scope, Auth)
    {
        $scope.data = {
            username: 'root',
            password: 'password',
        };

        $scope.login = function(credentials)
        {
                    $location.path('/modules');
            // Auth.verify(credentials)
            //     .then(function (session) {
            //     });
        };
    }]);
