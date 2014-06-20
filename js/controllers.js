'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MindasGotThisUnderControl', ['$scope', function($scope) {

        $scope.featuredWorks = new FeaturedWorks();

        $scope.init = function() {
            console.log("MindaMyers.com debugging ensues...");
            console.dir(navigator);
        }

        $scope.init();

        $scope.loadFeaturedWork = function(featuredWork) {
            console.log("load featured work:"+featuredWork.title);
            //load a new page partial


        }



  }])
  .controller('MainContentController', ['$scope', function($scope) {

  }])
  .controller('PortfolioController', ['$scope', function($scope) {
    console.log("initilazing the portfolio controller");
  }]);
