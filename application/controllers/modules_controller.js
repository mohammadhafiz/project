application.controller('ModulesController', ['$location', '$scope', '$timeout', 'Auth', 'User',
    function($location, $scope, $timeout, Auth, User)
    {
        User.query({
            limit: 3,
            username: '~a%',
        }, function(users)
        {
            console.info(users);
        });

        $scope.logout = function()
        {
            $timeout(function()
            {
                Auth.forget()
                    .then(function()
                    {
                        $location.path('/login');
                    });
            }, 300);
        };
    }]);
