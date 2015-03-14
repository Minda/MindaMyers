'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MindasGotThisUnderControl', function($scope, $http, $location) {

        $scope.init = function() {
            console.log("MindaMyers.com debugging ensues...");
            console.dir(navigator);
            /*$http.get('js/content.json').then(function(res){
                $scope.data = res.data;
                console.dir($scope.data);
            }).then(function() {
                $scope.featuredWorks = new FeaturedWorks($scope.data);
            })*/

        }
    });
