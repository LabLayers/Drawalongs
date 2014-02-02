'use strict';

angular.module('mean.articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Global', 'Articles', function ($scope, $routeParams, $location, Global, Articles) {
    $scope.global = Global;

    $scope.set = function(new_url) {
        this.url = new_url;
    };
    
    $scope.create = function() {
        var article = new Articles({
            url: this.url,
            match: this.match,
            title: this.title,
            content: this.content,
            nsfw: this.nsfw
        });
        
        article.$save(function(response) {
            $location.path('art/' + response._id);
        });

        this.url = '';
        this.match = '';
        this.title = '';
        this.content = '';
        this.nsfw = false;

    };

    $scope.remove = function(article) {
        if (article) {
            article.$remove();

            for (var i in $scope.articles) {
                if ($scope.articles[i] === article) {
                    $scope.articles.splice(i, 1);
                }
            }
        }
        else {
            $scope.article.$remove();
            $location.path('browse');
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
            $location.path('art/' + article._id);
        });
    };

    $scope.find = function() {
        Articles.query(function(articles) {
            $scope.articles = articles;
        });
    };

    $scope.findOne = function() {
        Articles.get({
            articleId: $routeParams.articleId
        }, function(article) {
            $scope.article = article;
        });
    };

}]);