var application = angular.module('application', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessageFormat',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate', // angular-translate
    'application.templates', // application templates cache
]);

application.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider)
    {
        $locationProvider.html5Mode(true)
            .hashPrefix('#!');

        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: '/templates/login.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            })
            .when('/modules', {
                controller: 'ModulesController',
                templateUrl: '/templates/modules.html',
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
                controller: 'AccessControlUsersIndex',
                templateUrl: '/templates/access_control_users_index.html',
                resolve: {
                    isLogged: ['Auth', function(Auth)
                    {
                        return Auth.isLogged();
                    }],
                },
            })
            .when('/access_control/users/add', {
                controller: 'AccessControlUsersCreate',
                templateUrl: '/templates/access_control_users_create.html',
            })
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

application.config(['$mdThemingProvider',
    function($mdThemingProvider)
    {
        $mdThemingProvider.alwaysWatchTheme(true);

        $mdThemingProvider.theme('red')
            .primaryPalette('red')
            .accentPalette('blue');

        $mdThemingProvider.theme('white')
            .primaryPalette('grey', {
                default: '200',
            })
            .accentPalette('blue');
    }]);

application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.preferredLanguage('en');
    }]);

application.config(['$httpProvider',
    function($httpProvider)
    {
        $httpProvider.defaults.headers = {
            common: {
                Accept: 'application/vnd.menggaris.v1+json',
            },
            post: {
                'Content-Type': 'application/json',
            },
            put: {
                'Content-Type': 'application/json',
            },
            delete: {
                'Content-Type': 'application/json',
            },
        };

        $httpProvider.interceptors.push('AuthInterceptor');
    }]);
