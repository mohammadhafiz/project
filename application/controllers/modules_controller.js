application.controller('ModulesController', ['$location', '$scope', '$timeout', 'Auth',
    function($location, $scope, $timeout, Auth)
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
