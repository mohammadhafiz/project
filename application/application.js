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
    'application.settings', // application settings
    'application.templates', // application templates cache
]);

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

        $httpProvider.interceptors.push('HttpInterceptor');
    }]);

application.config(['$mdThemingProvider',
    function($mdThemingProvider)
    {
        $mdThemingProvider.alwaysWatchTheme(true);

        $mdThemingProvider.theme('red')
            .primaryPalette('red')
            .accentPalette('indigo');

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
