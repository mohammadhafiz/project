application.controller('AccessControlUsersCreateController', ['$location', '$scope', 'User',
    function($location, $scope, User)
    {
        $scope.data = {
            username: '',
            password: '',
            password_confirmation: '',
        };

        $scope.add = function(data)
        {
            var user = new User(data);

            user.$save()
                .then(function()
                {
                    $location.path('/access_control/users');
                })
        };

        $scope.back = function()
        {
            $location.path('/access_control/users');
        };
    }]);
