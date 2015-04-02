var header = angular.module('ginaApp.header', []);

header.directive('header', function () {
	return {
		restrict: 'A',
		replace: true, 
		templateUrl: "header.html",
		controller: function($scope, $location, $state){
			console.log($location.path());
			console.log($location.path() == "");
			$scope.reset = function() {
				$scope.isHome = false;
				$scope.isFeatures = false;
			};

			$scope.features = function() {
				$scope.reset();
				$state.go('features');
				$scope.isFeatures = true;
			};

			$scope.home = function() {
				$scope.reset();
				$state.go('home');
				$scope.isHome = true;
			};
			if ($location.path() == "") {
				$state.go('home');
			}
			if ($location.path() == '/' || $location.path() == '') {
				console.log('home');
				$scope.home();
			} else if ($location.path() == '/features') {
				console.log('features');
				$scope.features();
			}
		}
	}
});