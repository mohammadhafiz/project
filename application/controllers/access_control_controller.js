application.controller('AccessControlController', ['$location', '$scope',
    function($location, $scope)
    {
        $scope.modules = function()
        {
            $location.path('/modules');
        };

        $scope.clientManagement = function()
        {
            $location.path('/access_control/clients');
        };

        $scope.grantManagement = function()
        {
            $location.path('/access_control/grants');
        };

        $scope.scopeManagement = function()
        {
            $location.path('/access_control/scopes');
        };

        $scope.userManagement = function()
        {
            $location.path('/access_control/users');
        };
    }]);
