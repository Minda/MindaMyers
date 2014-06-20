'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MindasGotThisUnderControl', ['$scope', function($scope) {
        $scope.title = "minda";

        console.log("MindaMyers.com debugging ensues...");

        $scope.loadMainContent = function() {
            console.log("Loading up the main stuffz");
            $scope.myPage = "partials/main-content.html";
        }

        $scope.loadBlogContent = function() {
            console.log("Do you *really* want to know my thoughts?");
            $scope.myPage = "partials/blog.html";
        }

        $scope.loadMainContent();

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
