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

ginaAppControllers.controller('PrintSuratCtrl',
	function($scope){
		$scope.count = 1;
		$scope.addSurat = function(){
			angular.element(document.getElementById('form-surat'))
				.append('<div class="form-group col-xs-4 cust-form">\
				<select class="form-control" name="jenis_'+$scope.count+'" id="jenis_'+$scope.count+'">\
				<option>Jenis Surat</option>\
				<option>Kartu Keluarga</option>\
				<option>Surat Mutasi Penduduk</option>\
				</select>\
			</div>\
			<div class="form-group col-xs-4 cust-form">\
				<input class="form-control" type="text" name="no_surat_'+$scope.count+'" id="no_surat_'+$scope.count+'" placeholder="NIK anggota keluarga"/>\
			</div>\
			<div class="form-group col-xs-2 cust-form">\
				<button type="button" name="btn_print_'+$scope.count+'" class="btn btn-default">Print</button>\
			</div>\
			<br>');
		$scope.count++;
		}
	}
);

ginaAppControllers.controller('CreateMutasiCtrl',
	function($scope){
		$scope.count = 1;
		$scope.addPengikut = function(){
			angular.element(document.getElementById('form-mutasi'))
				.append('<div class="form-group">\
				<label class="col-sm-2 control-label" for="nik_pengikut_'+$scope.count+'">Pengikut</label>\
				<div class="col-sm-10">\
					<div class="col-xs-5">\
						<input class="form-control" type="text" name="nik_keluarga_'+$scope.count+'" id="nik_keluarga_'+$scope.count+'" placeholder="NIK anggota keluarga"/>\
					</div>\
					<div class="col-xs-5">\
						<select class="form-control" name="status_kel_'+$scope.count+'" id="status_kel_'+$scope.count+'">\
						<option>Status dalam keluarga</option>\
						<option>Kepala keluarga</option>\
						<option>Istri</option>\
						<option>Anak</option>\
						<option>Cucu</option>\
						</select>\
					</div><br>\
				</div>\
			</div>');
		$scope.count++;
		}
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

		$scope.createKK = function() {
			console.log('create kk tombol ketekan');
		}
	}
);