application.factory('API', ['Settings',
    function(Settings)
    {
        var api = {};

        api.access_token    = '/api/access_token';
        api.session         = '/api/session';
        api.users           = '/api/users/:user_id';
        api.scopes          = '/api/scopes/:scope_id';
        api.grants          = '/api/grants/:grant_id';
        api.grantScopes     = '/api/grants/:grant_id/scopes/:scope_id';
        api.clients         = '/api/clients/:client_id';
        api.clientGrants    = '/api/clients/:client_id/grants/:grant_id';
        api.clientScopes    = '/api/clients/:client_id/scopes/:scope_id';

        api.get = function(endpoint)
        {
            return Settings.host.concat(api[endpoint]);
        };

        return api;
    }]);
