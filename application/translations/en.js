application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('en', {
            'action_add': 'Add',
            'action_back': 'Go back',
            'action_cancel': 'Cancel',
            'action_create': 'Create',
            'action_delete': 'Delete',
            'action_login': 'Log in',
            'action_logout': 'Log out',
            'action_menu': 'Menu',
            'action_more': 'More',
            'action_search': 'Search',
            'action_add_user': 'Add new user',

            'dialog_content_delete_record': 'Deleted record cannot be restored.',
            'dialog_title_delete_record': 'Would you like to delete this record?',

            'label_created_at': 'Created At',
            'label_name': 'Name',
            'label_password': 'Password',
            'label_password_confirmation': 'Password Confirmation',
            'label_updated_at': 'Updated At',
            'label_username': 'Username',

            'placeholder': 'Placeholder',

            'title_access_control': 'Access Control',
            'title_arrears_management': 'Arrears Management',
            'title_client_management': 'Client Management',
            'title_grant_management': 'Grant Management',
            'title_login': 'Log In',
            'title_menu': 'Menu',
            'title_modules': 'Module List',
            'title_record_count': 'Showing total of {{ length }} record',
            'title_scope_management': 'Scope Management',
            'title_settings': 'Settings',
            'title_user_management': 'User Management',

            'toast_incorrect_credentials': 'The user credentials is incorrect.',
            'toast_invalid_refresh_token': 'The refresh token is invalid.',
            'toast_validation_failed': 'Validation failed on server.',

            'validation_maxlength_24': 'This field may not be greater than 24 characters.',
            'validation_maxlength_250': 'This field may not be greater than 250 characters.',
            'validation_minlength_4': 'This field must be at least 4 characters.',
            'validation_required': 'This field is required.',
        });
    }]);
