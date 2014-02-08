'use strict';

angular.module('mean.matches').controller('MatchesController', ['$scope', '$routeParams', '$location', 'Global', 'Matches', function ($scope, $routeParams, $location, Global, Matches) {
    $scope.global = Global;

    $scope.set = function(new_url) {
        this.url = new_url;
    };
    
    $scope.create = function() {
        var match = new Matches({
            created: this.created,
            end: this.end,
            status: this.status,
            title: this.title,
            content: this.content,
            medium: this.medium,
            rules: this.rules,
            tags: this.tags,
            featured: this.featured,
            desktop: this.desktop,
            comments: this.comments
        });
        
        match.$save(function(response) {
            $location.path('match/' + response._id);
        });

        this.created = '';
        this.end = '';
        this.status = '';
        this.title = '';
        this.content = '';
        this.medium = '';
        this.rules = '';
        this.tags = '';
        this.featured = '';
        this.desktop = '';
        this.comments = '';

    };

    $scope.remove = function(match) {
        if (match) {
            match.$remove();

            for (var i in $scope.matches) {
                if ($scope.matches[i] === match) {
                    $scope.matches.splice(i, 1);
                }
            }
        }
        else {
            $scope.match.$remove();
            $location.path('matches');
        }
    };

    $scope.update = function() {
        var match = $scope.match;
        if (!match.updated) {
            match.updated = [];
        }
        match.updated.push(new Date().getTime());

        match.$update(function() {
            $location.path('match/' + match._id);
        });
    };

    $scope.find = function() {
        Matches.query(function(matches) {
            $scope.matches = matches;
        });
    };

    $scope.findOne = function() {
        Matches.get({
            matchId: $routeParams.matchId
        }, function(match) {
            $scope.match = match;
        });
    };

}]);