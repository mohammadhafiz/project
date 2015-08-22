application.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider)
    {
        $locationProvider.html5Mode(true)
            .hashPrefix('#!');

        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            })
            .when('/modules', {
                controller: 'ModulesController',
                templateUrl: 'modules.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                    session: ['Auth', function(Auth)
                    {
                        return Auth.session();
                    }],
                },
            })
            .when('/access_control/users', {
                controller: 'AccessControlUsersController',
                templateUrl: 'access_control/users.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                },
            })
            .when('/access_control/users/create', {
                controller: 'AccessControlUsersCreateController',
                templateUrl: 'access_control/users/create.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                },
            })
            .when('/access_control/users/:user_id', {
                controller: 'AccessControlUsersReadController',
                templateUrl: 'access_control/users/read.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                    user: ['$route', 'User', function($route, User)
                    {
                        return User.get({
                            user_id: $route.current.params.user_id,
                        }).$promise;
                    }],
                },
            })
            .when('/access_control/clients', {
                controller: 'AccessControlClientsController',
                templateUrl: 'access_control/clients.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                },
            })
            .when('/access_control/clients/create', {
                controller: 'AccessControlClientsCreateController',
                templateUrl: 'access_control/clients/create.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                },
            })
            .when('/access_control/clients/:client_id', {
                controller: 'AccessControlClientsReadController',
                templateUrl: 'access_control/clients/read.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                    client: ['$route', 'Client', function($route, Client)
                    {
                        return Client.get({
                            client_id: $route.current.params.client_id,
                        }).$promise;
                    }],
                },
            })
            .when('/access_control/clients/:client_id/update', {
                controller: 'AccessControlClientsUpdateController',
                templateUrl: 'access_control/clients/update.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                    client: ['$route', 'Client', function($route, Client)
                    {
                        return Client.get({
                            client_id: $route.current.params.client_id,
                        }).$promise;
                    }],
                },
            })
            .when('/access_control/grants', {})
            .when('/access_control/scopes', {})
            .otherwise({
                redirectTo: '/login',
            });
    }]);

application.run(['$location', '$rootScope', 'Auth',
    function($location, $rootScope, Auth)
    {
        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection)
        {
            switch (rejection) {
                case 'auth.is_guest':
                    $location.path('/modules');
                    break;
                case 'auth.is_logged':
                    Auth.forget();
                    break;
            }
        });
    }]);
