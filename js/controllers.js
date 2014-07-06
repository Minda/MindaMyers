'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MindasGotThisUnderControl', function($scope, $http, $location) {

        $scope.init = function() {
            console.log("MindaMyers.com debugging ensues...");
            console.dir(navigator);
            $http.get('js/content.json').then(function(res){
                $scope.data = res.data;
                console.dir($scope.data);
            }).then(function() {
                $scope.featuredWorks = new FeaturedWorks($scope.data);
            })

        }

        $scope.init();

        $scope.loadFeaturedWork = function(featuredWork) {
            console.log("load featured work:"+featuredWork.title);
            //load a new page partial
            console.dir($location);


        }


    })
    .controller('MainContentController', function($scope) {

    })
    .controller('PortfolioController', function($scope, $route, $routeParams, $location) {
        console.log("initilazing the portfolio controller");

        $scope.loadPortfolioPiece = function(id) {
            console.log("load portfolio with id="+id);

            if (id === undefined) {
                $scope.featuredWork = _.first($scope.featuredWorks.getContents());
            }
            else {
                $scope.featuredWork = $scope.featuredWorks.getFeaturedWorkById(id);
            }
            $routeParams.id = id;
        }

        $scope.loadNextItem = function() {
            console.log("load next");
            $scope.loadPortfolioPiece($scope.featuredWorks.getNextIndex());
        }

        $scope.loadPrevItem = function() {
            console.log("load prev");
            $scope.loadPortfolioPiece($scope.featuredWorks.getPrevIndex());
        }

        $scope.init = function() {
            console.dir($routeParams);
            if ($routeParams.id != null) {
                $scope.featuredWorks.setIndex($routeParams.id);
            }
            $scope.loadPortfolioPiece($scope.featuredWorks.getIndex());
        }

        $scope.init();


    });
