'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/browse', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/submit', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/art/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/art/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).
        when('/about', {
            templateUrl: 'views/static/about.html'
        }).
        when('/legal', {
            templateUrl: 'views/static/legal.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);