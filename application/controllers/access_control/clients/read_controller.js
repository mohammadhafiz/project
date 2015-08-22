application.controller('AccessControlClientsReadController', ['$location', '$mdDialog', '$scope', '$translate', 'Client', 'client',
    function($location, $mdDialog, $scope, $translate, Client, client)
    {
        $scope.client = client.data;

        $scope.back = function()
        {
            $location.path('/access_control/clients');
        };

        $scope.delete = function($event, client)
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
                });
            })
            .then(function()
            {
                $location.path('/access_control/clients');
            });
        };

        $scope.update = function(client)
        {
            $location.path('/access_control/clients/' + client.id + '/update');
        };
    }]);
