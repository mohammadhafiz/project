application.controller('ModulesController', ['$location', '$scope', '$timeout', 'Auth', 'isLogged', 'session',
    function($location, $scope, $timeout, Auth, isLogged, session)
    {
        $scope.accessControl = function()
        {
            $timeout(function()
            {
                $location.path('/access_control/users');
            }, 500);
        };

        $scope.logout = function()
        {
            $timeout(function()
            {
                Auth.forget();
            }, 500);
        };
    }]);
