application.controller('ModulesController', ['$location', '$scope',
    function($location, $scope)
    {
        $scope.logout = function()
        {
            $location.path('/login');
        }
    }]);
