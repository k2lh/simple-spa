angular
    .module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
])

.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'questions/questions-popular.html',
                controller  : 'questionsController'
            })

            .when('/questions', {
                templateUrl : 'questions/questions-popular.html',
                controller  : 'questionsController'
            })

            .when('/questions-general', {
                templateUrl : 'questions/questions-general.html',
                controller  : 'questionsGeneralController'
            })

            .when('/questions-product', {
                templateUrl : 'questions/questions-product.html',
                controller  : 'questionsProductController'
            })

            .when('/questions-content', {
                templateUrl : 'questions/questions-content.html',
                controller  : 'questionsContentController'
            })

            .when('/forums', {
                templateUrl : 'forums/forums-popular.html',
                controller  : 'forumsController'
            })

            .when('/forums-general', {
                templateUrl : 'forums/forums-general.html',
                controller  : 'forumsGeneralController'
            })

            .when('/forums-product', {
                templateUrl : 'forums/forums-product.html',
                controller  : 'forumsProductController'
            })

            .when('/forums-content', {
                templateUrl : 'forums/forums-content.html',
                controller  : 'forumsContentController'
            })

            .when('/guides', {
                templateUrl : 'guides/guides-popular.html',
                controller  : 'guidesController'
            })

            .when('/guides-general', {
                templateUrl : 'guides/guides-general.html',
                controller  : 'guidesGeneralController'
            })

            .when('/guides-product', {
                templateUrl : 'guides/guides-product.html',
                controller  : 'guidesProductController'
            })

            .when('/guides-content', {
                templateUrl : 'guides/guides-content.html',
                controller  : 'guidesContentController'
            })

            .when('/contact', {
                templateUrl : 'contact/contact-popular.html',
                controller  : 'contactController'
            });

});


