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
				$scope.user.isAdmin = User.isAdmin;
				$scope.isHome = false;
				// $scope.isKependudukan = false;
				// $scope.isBlog = false;
				// $scope.isAbout = false;
				// $scope.isContact = false;
			};

			$scope.kk = function() {
				$scope.reset();
				// $scope.isKependudukan = true;
				$state.go('kk');
			};

			$scope.home = function() {
				$scope.reset();
				$scope.isHome = true;
				$state.go('home');
			};

			$scope.mp = function() {
				$scope.reset();
				// $scope.isBlog = true;
				$state.go('mp');
			}

			$scope.about = function() {
				$scope.reset();
				// $scope.isAbout = true;
				$state.go('about');
			}

			$scope.contact = function() {
				$scope.reset();
				// $scope.isContact = true;
			}

			
			$scope.user = angular.copy({});
			$scope.user.isUserLogged = User.isLogged;
			$scope.user.nama = User.nama;
			$scope.user.nik = User.nik;
			$scope.user.isAdmin = User.isAdmin;
			$scope.isAccountError = false;
			$scope.isLoading = false;
			console.log(User.isLogged);
			if ($location.path() == '/' || $location.path() == '') {
				$scope.isHome = true;
			} else if ($location.path() == '/kk') {
				// $scope.isKependudukan = true;
			} else if ($location.path() == '/mp') {
				// $scope.isBlog = true;
			} else if ($location.path() == '/about') {
				// $scope.isAbout = true;
			} else if ($location.path() == '/contact') {
				// $scope.isContact = true;
			}

			$scope.login = function () {
				$scope.isLoading = true;
				Server.login($scope.nik, $scope.password)
				.then(function(data) {
					$scope.user = angular.copy({});
					User.id = data.id;
					User.isLogged = true;
					User.nama = data.nama;
					User.nik = data.nik;
					User.isAdmin = data.is_admin;
					User.session();
					$scope.user.isUserLogged = true;
					$scope.user.nama = User.nama;
					$scope.user.nik = User.nik;
					$scope.user.isAdmin = User.isAdmin == 1 ? true : false;
					$scope.isLoading = false;
				}, function(err){
					$scope.isAccountError = true;
					$scope.nik = "";
					$scope.password = "";
					$scope.isLoading = false;
				});
			}
			
			$scope.logout = function() {
				$scope.user = angular.copy({});
				$scope.user.isUserLogged = false;
				$scope.user.nama = '';
				$scope.user.nik = '';
				$scope.user.isAdmin = false;
				Server.logout();
				User.reset();
				$rootScope.$broadcast('logoutEvent',[1,2,3]);
			}
		}
	}
});