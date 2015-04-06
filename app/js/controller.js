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
		$scope.count = 1;
		$scope.addKeluarga = function() {
			angular.element(document.getElementById('form-keluarga'))
				.append('<div class="form-group col-xs-5 cust-form">\
				<input class="form-control" type="text" name="nik_keluarga_'+$scope.count+'" id="nik_keluarga_'+$scope.count+'" placeholder="NIK anggota keluarga"/>\
			</div>\
			<div class="form-group col-xs-5 cust-form">\
				<select class="form-control" name="status_kel_'+$scope.count+'" id="status_kel_'+$scope.count+'">\
				<option>Status dalam keluarga</option>\
				<option>Kepala keluarga</option>\
				<option>Istri</option>\
				<option>Anak</option>\
				<option>Cucu</option>\
				</select>\
			</div><br>');
		$scope.count++;
		}
	}
);