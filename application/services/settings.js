application.factory('Settings', [
    function()
    {
        var settings = {};

        settings.host           = 'http://homestead.app';
        settings.client_id      = '1111111111111111111111111111111111111111';
        settings.client_secret  = 'passwordpasswordpasswordpasswordpassword';

        settings.scopes = [
            'create_client_data',
            'read_client_data',
            'update_client_data',
            'delete_client_data',

            'create_grant_data',
            'read_grant_data',
            'update_grant_data',
            'delete_grant_data',

            'create_scope_data',
            'read_scope_data',
            'update_scope_data',
            'delete_scope_data',

            'create_user_data',
            'read_user_data',
            'update_user_data',
            'delete_user_data',
        ];


        return settings;
    }]);
