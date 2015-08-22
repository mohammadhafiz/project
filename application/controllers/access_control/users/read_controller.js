application.controller('AccessControlUsersReadController', ['$location', '$mdDialog', '$scope', '$translate', 'User', 'user',
    function($location, $mdDialog, $scope, $translate, User, user)
    {
        $scope.user = user.data;

        $scope.back = function()
        {
            $location.path('/access_control/users');
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
                $location.path('/access_control/users');
            });
        };
    }]);
