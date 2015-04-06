var header = angular.module('ginaApp.header', ['ginaApp.factories']);

header.directive('header', function () {
	return {
		restrict: 'A',
		replace: true, 
		templateUrl: "app/partials/header.html",
		controller: function($scope, $location, $state, Server){
			$scope.reset = function() {
				$scope.isHome = false;
				$scope.isFeatures = false;
				$scope.isBlog = false;
				$scope.isAbout = false;
				$scope.isContact = false;
			};

			$scope.features = function() {
				$scope.reset();
				$scope.isFeatures = true;
				$state.go('features');
			};

			$scope.home = function() {
				$scope.reset();
				$scope.isHome = true;
				$state.go('home');
			};

			$scope.blog = function() {
				$scope.reset();
				$scope.isBlog = true;
				$state.go('blog');
			}

			$scope.about = function() {
				$scope.reset();
				$scope.isAbout = true;
				$state.go('about');
			}

			$scope.contact = function() {
				$scope.reset();
				$scope.isContact = true;
			}

			if ($location.path() == '/' || $location.path() == '') {
				$scope.isHome = true;
			} else if ($location.path() == '/features') {
				$scope.isFeatures = true;
			} else if ($location.path() == '/blog') {
				$scope.isBlog = true;
			} else if ($location.path() == '/about') {
				$scope.isAbout = true;
			} else if ($location.path() == '/contact') {
				$scope.isContact = true;
			}
			// Server.get('auth/check').then(function(data){
			// 	console.log(data);
			// }, function(err) {
			// 	console.log(err);
			// });
		}
	}
});