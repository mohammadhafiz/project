application.controller('AccessControlClientsCreateController', ['$location', '$scope', 'Client',
    function($location, $scope, Client)
    {
        $scope.data = {
            name: '',
        };

        $scope.create = function(data)
        {
            var client = new Client(data);

            client.$save()
                .then(function()
                {
                    $location.path('/access_control/clients');
                });
        };

        $scope.back = function()
        {
            $location.path('/access_control/clients');
        };
    }]);
