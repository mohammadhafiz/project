application.controller('AccessControlUsersIndex', ['$location', '$scope', '$mdSidenav', '$mdUtil', 'User',
    function($location, $scope, $mdSidenav, $mdUtil, User)
    {
        $scope.users = [];
        $scope.theme = 'red';

        $scope.add = function()
        {
            $location.path('/access_control/users/add');
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };

        $scope.modules = function()
        {
            $location.path('/modules');
        };

        $scope.regex = function(actual, expected)
        {
            return actual.match(new RegExp(expected, 'i'));
        };

        $scope.userManagement = function()
        {
            $location.path('/access_control/users');
            $mdSidenav('menu').close();
        };

        // Recursive loader with limit of 10
        var page = 0;
        var limit = 10;
        var load = function()
        {
            var options = {};
            options.limit = limit;

            page += 1;
            if (page > 1) {
                options.skip = limit * (page - 1);
            }

            User.query(options).$promise
                .then(function(users)
                {
                    if (users.data.length < 1) {
                        return;
                    }

                    $scope.users = $scope.users.concat(users.data);
                    load();
                });
        };
        load();
    }]);
