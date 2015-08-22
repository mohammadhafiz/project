application.controller('AccessControlUsersController', ['$location', '$mdDialog', '$mdSidenav', '$scope', '$translate', 'User',
    function($location, $mdDialog, $mdSidenav, $scope, $translate, User)
    {
        $scope.limit = 50;
        $scope.page = 0;
        $scope.theme = 'red';
        $scope.users = [];

        $scope.create = function()
        {
            $location.path('/access_control/users/create');
        };

        $scope.delete = function($event, user)
        {
            $translate([
                'dialog_title_delete_record',
                'dialog_content_delete_record',
                'action_delete',
                'action_cancel',
            ])
            .then(function(translations)
            {
                return $mdDialog.confirm()
                    .title(translations.dialog_title_delete_record)
                    .content(translations.dialog_content_delete_record)
                    .ok(translations.action_delete)
                    .cancel(translations.action_cancel)
                    .targetEvent($event);
            })
            .then(function(dialog)
            {
                return $mdDialog.show(dialog);
            })
            .then(function()
            {
                return User.delete({
                    user_id: user.id,
                }).$promise;
            })
            .then(function()
            {
                $scope.users.splice($scope.users.indexOf(user), 1);
                $location.path('/access_control/users');
            });
        };

        $scope.load = function()
        {
            var options = {};
            options.limit = $scope.limit;
            if (++$scope.page > 1) options.skip = $scope.limit * ($scope.page - 1);

            User.query(options).$promise
                .then(function(users)
                {
                    if (users.data.length < 1) return;
                    $scope.users = $scope.users.concat(users.data);
                    $scope.load();
                });
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };

        $scope.read = function(user)
        {
            $location.path('/access_control/users/' + user.id);
        };

        $scope.regex = function(actual, expected)
        {
            return actual.match(new RegExp(expected, 'i'));
        };

        $scope.load();
    }]);
