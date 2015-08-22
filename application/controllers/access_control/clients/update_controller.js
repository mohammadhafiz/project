application.controller('AccessControlClientsUpdateController', ['$scope', '$window', 'Client', 'client',
    function($scope, $window, Client, client)
    {
        $scope.data = client.data;

        $scope.update = function(data)
        {
            var client = new Client(data);

            client.$update()
                .then(function()
                {
                    $window.history.back();
                });
        };

        $scope.back = function()
        {
            $window.history.back();
        };
    }]);
