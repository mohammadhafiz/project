application.controller('ModulesController', ['$location', '$scope', '$timeout', 'Auth', 'User',
    function($location, $scope, $timeout, Auth, User)
    {
        var users = User.query();
        users.$promise
            .then(function(users)
            {
                console.log(users);
            });

        $scope.logout = function()
        {
            $timeout(function()
            {
                Auth.forget();
            }, 300);
        };
    }]);
