'use strict';

/**
 * @ngdoc function
 * @name hnStarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hnStarterApp
 */
angular.module('hnStarterApp')
  .controller('MainCtrl', function ($scope, $http) {
	$scope.page = 1;
	$scope.stories = [];
    
    $scope.loadPage = function() {
		$scope.api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30&page=' + $scope.page;

	    $http.get($scope.api).then(function(data) {
			angular.forEach(data.data.hits, function(value) {
				$scope.stories.push(value);
			});
			console.log($scope.stories);
	    	$scope.pages = data.data.nbPages;
	    });
    }


    $scope.nextPage = function() {
		if ($scope.page < $scope.pages) {
			$scope.page++;
			$scope.loadPage();
		}
    }

    $scope.loadPage();
  });
