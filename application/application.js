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
                templateUrl: '/templates/login.html',
            })
            .when('/modules', {
                templateUrl: '/templates/modules.html',
            })
            .otherwise({
                redirectTo: '/login',
            });
    }]);
