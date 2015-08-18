application.factory('User', ['$resource', 'API',
    function($resource, API)
    {
        return $resource(API.get('users'), null, {
            query: {
                isArray: false,
            },
        });
    }]);
