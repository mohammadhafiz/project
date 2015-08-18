application.factory('Error', ['$q',
    function($q)
    {
        var error = {};

        error.handler = function(error)
        {
            console.error(error);
            return $q.reject(error);
        };

        error.handle = function()
        {
            return error.handler;
        };

        return error;
    }])
