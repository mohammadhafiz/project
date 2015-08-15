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
            })
            .when('/modules', {
                templateUrl: '/templates/modules.html',
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
        $translateProvider.preferredLanguage('ms');
    }]);
