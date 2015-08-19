application.factory('User', ['$resource', 'API',
    function($resource, API)
    {
        return $resource(API.get('users'), {
                user_id: '@id',
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
