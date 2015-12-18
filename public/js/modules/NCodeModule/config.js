define(['nCodeApp'], function(app) {

    app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('root', {
                abstract: true,
                url: "",
                views: {
                    'header': {
                        templateUrl: 'views/common/header.html'
                    },
                    'footer': {
                        templateUrl: 'views/common/footer.html'
                    }

                }
            })

        .state('root.home', {
            url: '',
            views: {
                'content@': {
                    templateUrl:'views/pages/home.html'
                }
            },
            secured: false
        })
    }]);

});
