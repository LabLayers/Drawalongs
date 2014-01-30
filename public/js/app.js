'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles']);

angular.module('mean.system', []);
angular.module('mean.articles', []);

$.get( '/quote', function( data ) {
    $( 'footer blockquote' ).html( data );
});