application.controller('AccessControlClientsController', ['$location', '$mdDialog', '$mdSidenav', '$scope', '$translate', 'Client',
    function($location, $mdDialog, $mdSidenav, $scope, $translate, Client)
    {
        $scope.limit = 50;
        $scope.page = 0;
        $scope.theme = 'red';
        $scope.clients = [];

        $scope.create = function()
        {
            $location.path('/access_control/clients/create');
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
                return Client.delete({
                    client_id: client.id,
                }).$promise;
            })
            .then(function()
            {
                $scope.clients.splice($scope.clients.indexOf(client), 1);
                $location.path('/access_control/clients');
            });
        };

        $scope.load = function()
        {
            var options = {};
            options.limit = $scope.limit;
            if (++$scope.page > 1) options.skip = $scope.limit * ($scope.page - 1);

            Client.query(options).$promise
                .then(function(clients)
                {
                    if (clients.data.length < 1) return;
                    $scope.clients = $scope.clients.concat(clients.data);
                    $scope.load();
                });
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };

        $scope.read = function(client)
        {
            $location.path('/access_control/clients/' + client.id);
        };

        $scope.regex = function(actual, expected)
        {
            return actual.match(new RegExp(expected, 'i'));
        };

        $scope.load();
    }]);
