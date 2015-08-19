application.controller('AccessControlUsersIndex', ['$location', '$scope', '$mdSidenav', '$timeout', 'User',
    function($location, $scope, $mdSidenav, $timeout, User)
    {
        $scope.users = User.query();

        $scope.menu = function()
        {
            $mdSidenav('left').toggle();
        };

        $scope.modules = function()
        {
            $timeout(function()
            {
                $location.path('/modules');
            }, 300);
        };
    }]);
