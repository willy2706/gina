var ginaAppControllers = angular.module('ginaApp.controllers', []);

ginaAppControllers.controller('PhoneListCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('phone.json').success(function(data) {
			$scope.phones = data;
		});

		$scope.orderProp = 'id';
	}
]);

ginaAppControllers.controller('LoginCtrl', ['$scope', 'Server',
	function ($scope, Server) {
		$scope.submit = function() {
			// console.log($scope.nik);
			// console.log($scope.password);
			// console.log($scope.nik, $scope.password);
			Server.login($scope.nik, $scope.password);
		}
	}
]);

ginaAppControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.phoneId = $routeParams.phoneId;
	}
]);

ginaAppControllers.controller('HeaderCtrl', 
	function($scope) {
		console.log('masiuk');
	}
);

ginaAppControllers.controller('CreateKKCtrl',
	function($scope) {
		$scope.tombol = function() {
			
		}
	}
);