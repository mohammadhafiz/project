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
                    guest_only: ['$q', 'Auth', function($q, Auth)
                    {
                        var deferred = $q.defer();
                        if (! Auth.isLogged()) {
                            deferred.resolve();
                        } else {
                            deferred.reject('guest_only');
                        }
                        return deferred.promise;
                    }],
                },
            })
            .when('/modules', {
                controller: 'ModulesController',
                templateUrl: '/templates/modules.html',
                resolve: {
                    member_only: ['$q', 'Auth', function($q, Auth)
                    {
                        var deferred = $q.defer();
                        if (Auth.isLogged()) {
                            deferred.resolve();
                        } else {
                            deferred.reject('member_only');
                        }
                        return deferred.promise;
                    }],
                },
            })
            .when('/access_control', {
            })
            .otherwise({
                redirectTo: '/login',
            });
    }]);

application.config(['$mdThemingProvider',
    function($mdThemingProvider)
    {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('orange')
            .backgroundPalette('grey');

        $mdThemingProvider.theme('indigo')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('orange')
            .backgroundPalette('grey');

        $mdThemingProvider.theme('indigoBackground')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('orange')
            .backgroundPalette('indigo');
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

application.run(['$location', '$rootScope',
    function($location, $rootScope)
    {
        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection)
        {
            switch (rejection) {
                case 'guest_only':
                    $location.path('/modules');
                    break;
                case 'member_only':
                    $location.path('/login');
                    break;
            }
        });
    }]);
