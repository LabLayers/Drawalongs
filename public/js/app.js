'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'ngDisqus']);

angular.module('mean.system', []);
angular.module('mean.articles', []);

/*ignore jslint start*/
$.get( '/quote', function( data ) {
    $( 'footer blockquote' ).html( data );
});

// Close Windows
function hide(obj) {
    var el = document.getElementById(obj);
        el.classList.remove('visible');
        el.classList.add('hidden');
        el.style.display = 'none';
}

// Close Windows in Style
function blast(obj) {
    var el2 = document.getElementById(obj);
        el2.classList.remove('visible');
        el2.classList.add('hidden');
        setTimeout( function() { el2.style.display='none' }, 500);
}

// Open Windows
function launch(obj) {
    var el3 = document.getElementById(obj);
        el3.style.display = 'block';
        setTimeout( function() { el3.classList.remove('hidden'); }, 100);
        el3.classList.add('visible');
}

// Dropdown Functions
function logout() {
    window.location.assign("/signout")
}
function profile() {
    window.location.assign("/#!/profile")
}

// Zoom
$(document).on('click', '.bubble img', function () {
    $("body").toggleClass("bubble-zoom");
});
/*ignore jslint end*/