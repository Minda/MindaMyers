'use strict';


// Declare app level module which depends on filters, and services
var mindaApp = angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);

mindaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/me', {templateUrl: 'partials/main-content.html', controller: 'MainContentController'});
  $routeProvider.when('/portfolio', {templateUrl: 'partials/_featured-work.html', controller: 'PortfolioController'});
  $routeProvider.otherwise({redirectTo: '/me'});
}]);

mindaApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();
  });
})
