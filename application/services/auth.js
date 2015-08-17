application.factory('Auth', ['$http',
    function($http)
    {
        var auth = {};

        auth.verify = function(credentials)
        {
            var request = {
                method: 'POST',
                url: 'http://homestead.app/api/access_token',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    grant_type: 'password',
                    username: credentials.username,
                    password: credentials.password,
                    client_id: '1111111111111111111111111111111111111111',
                    client_secret: 'passwordpasswordpasswordpasswordpassword',
                    scope: 'read_user_data',
                },
            };

            $http(request)
                .then(function(response)
                {
                    console.log(response);
                    return response;
                })
                .catch(function(error)
                {
                    console.error(error);
                });
        };

        return auth;
    }]);
