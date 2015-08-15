application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('en', {
            'title_login': 'Log in',
            'label_username': 'Username',
            'label_password': 'Password',
            'button_login': 'Log in',
        });
    }]);
