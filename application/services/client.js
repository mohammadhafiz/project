application.factory('Client', ['$resource', 'API',
    function($resource, API)
    {
        return $resource(API.get('clients'), {
            client_id: '@id',
        }, {
            delete: {
                method: 'DELETE',
            },
            get: {
                method: 'GET',
            },
            save: {
                method: 'POST',
            },
            query: {
                method: 'GET',
                isArray: false,
            },
            update: {
                method: 'PUT',
            },
        });
    }]);
