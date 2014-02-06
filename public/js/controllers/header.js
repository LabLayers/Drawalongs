'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Browse',
        'link': 'art'
    }, {
        'title': 'Submit',
        'link': 'submit'
    }];
    
    $scope.isCollapsed = false;
}]);