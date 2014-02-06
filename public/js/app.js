'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'mean.matches', 'ngDisqus', 'chieffancypants.loadingBar', 'ngAnimate']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.matches', []);

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

// Scroll Timeouts
var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 20);   // set new timer
});

function handleScroll() {
    scrollTimer = null;
    $("body").toggleClass("viewing-content", $(document).scrollTop() >= 280);
}

// Tags
function tagger() {
  var tagize = document.getElementById('tag').textContent;
  var tagize = tagize.replace(/ /g,"</span><span id='tag'>")
  $('#tag').html(tagize);
}

// Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47722829-1', 'drawalongs.com');
  ga('send', 'pageview');

// Markdown
function md() {
    getDATA = document.getElementById('md').textContent;
    console.log(getDATA);
    console.log("markdown triggered");
    var converter = new Showdown.converter();
    var text = document.getElementById('md').textContent;
    markdown = converter.makeHtml(text);
    $('#md').html(markdown);
    console.log(markdown);
};

/*ignore jslint end*/