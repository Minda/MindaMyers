'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
   .directive('featureBox', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/_feature-box.html'
        };
    });
