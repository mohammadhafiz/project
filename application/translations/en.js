application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('en', {
            'action_login': 'Log in',
            'action_logout': 'Log out',

            'label_password': 'Password',
            'label_username': 'Username',

            'placeholder': 'Placeholder',

            'title_access_control': 'Access Control',
            'title_arrears_management': 'Arrears Management',
            'title_login': 'Login',
            'title_modules': 'Modules',
            'title_settings': 'Settings',

            'toast_incorrect_credentials': 'The user credentials is incorrect.',

            'validation_maxlength_24': 'This field may not be greater than 24 characters.',
            'validation_minlength_4': 'This field must be at least 4 characters.',
            'validation_required': 'This field is required.',
        });
    }]);
