application.controller('LoginController', ['$location', '$scope',
    function($location, $scope)
    {
        $scope.login = function()
        {
            console.log('Log in');
            $location.path('/modules');
        };
    }]);
