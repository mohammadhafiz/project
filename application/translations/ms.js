application.config(['$translateProvider',
    function($translateProvider)
    {
        $translateProvider.translations('ms', {
            'title_login': 'Log masuk',
            'label_username': 'Kata nama',
            'label_password': 'Kata kunci',
            'button_login': 'Log masuk',
        });
    }]);
