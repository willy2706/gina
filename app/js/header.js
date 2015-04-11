var header = angular.module('ginaApp.header', ['ginaApp.factories']);

header.directive('header', function () {
	return {
		restrict: 'A',
		replace: true, 
		templateUrl: "app/partials/header.html",
		controller: function($scope, $location, $state, Server, User, $rootScope){
			$scope.reset = function() {
				$scope.user = angular.copy({});
				$scope.user.isUserLogged = User.isLogged;
				$scope.user.nama = User.nama;
				$scope.user.nik = User.nik;
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
			$scope.user = angular.copy({});
			// console.log(User.isLogged + " aaaa");
			$scope.user.isUserLogged = User.isLogged;
			$scope.user.nama = User.nama;
			$scope.user.nik = User.nik;
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

			$scope.login = function () {
				Server.login($scope.nik, $scope.password)
				.then(function(data) {
					$scope.user = angular.copy({});
					User.id = data.id;
					User.isLogged = true;
					User.nama = data.nama;
					User.nik = data.nik;
					User.session();
					$scope.user.isUserLogged = true;
					$scope.user.nama = User.nama;
					$scope.user.nik = User.nik;
				}, function(err){
					console.log(err);
				});
			}
			
			$scope.logout = function() {
				$scope.user = angular.copy({});
				$scope.user.isUserLogged = false;
				$scope.user.nama = '';
				$scope.user.nik = '';
				Server.logout();
				User.reset();
				$rootScope.$broadcast('logoutEvent',[1,2,3]);
			}
		}
	}
});