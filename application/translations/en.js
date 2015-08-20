application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('en', {
            'action_add': 'Add',
            'action_back': 'Go back',
            'action_login': 'Log in',
            'action_logout': 'Log out',
            'action_menu': 'Menu',
            'action_search': 'Search',
            'action_add_user': 'Add a new user',

            'label_password': 'Password',
            'label_username': 'Username',
            'label_password_confirmation': 'Password Confirmation',

            'placeholder': 'Placeholder',

            'title_access_control': 'Access Control',
            'title_actions': 'Actions',
            'title_arrears_management': 'Arrears Management',
            'title_client_management': 'Client Management',
            'title_grant_management': 'Grant Management',
            'title_login': 'Log In',
            'title_modules': 'Module List',
            'title_scope_management': 'Scope Management',
            'title_settings': 'Settings',
            'title_user_management': 'User Management',

            'toast_incorrect_credentials': 'The user credentials is incorrect.',
            'toast_invalid_refresh_token': 'The refresh token is invalid.',
            'toast_validation_failed': 'Validation failed on server.',

            'validation_maxlength_24': 'This field may not be greater than 24 characters.',
            'validation_minlength_4': 'This field must be at least 4 characters.',
            'validation_required': 'This field is required.',
        });
    }]);
