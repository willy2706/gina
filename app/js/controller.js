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

ginaAppControllers.controller('CreateKKCtrl', ['$scope', '$compile', 'Server',
	function($scope, $compile, Server) {
		$scope.count = 1;
		$scope.nik_keluarga = [];
		$scope.addKeluarga = function() {
			var a = angular.element(document.getElementById('form-keluarga'))
				.append($compile('<div class="col-xs-12">\
					<div class="form-group col-xs-5 cust-form">\
						<input nik-validator ng-model = nik_keluarga['+$scope.count+'] class="form-control" type="text" name="nik_keluarga_'+$scope.count+'" placeholder="NIK anggota keluarga" required/>\
						<div ng-if="createKKForm.nik_keluarga_'+$scope.count+'.$dirty">\
		                    <div ng-messages="createKKForm.nik_keluarga_'+$scope.count+'.$error" class="validation-error">\
		                        <div ng-message="nik">Nik tidak valid</div>\
		                        <div ng-message="required">Nik required</div>\
		                    </div>\
		                    <div ng-messages="createKKForm.nik_keluarga_'+$scope.count+'.$pending" class="validation-pending">\
		                        <div ng-message="nik">Cek Nik</div>\
		                    </div>\
		                </div>\
					</div>\
					<div class="form-group col-xs-5 cust-form">\
						<select class="form-control" name="status_kel_'+$scope.count+'" id="status_kel_'+$scope.count+'">\
							<option value = "Istri">Istri</option>\
							<option value = "Anak">Anak</option>\
							<option value = "Cucu">Cucu</option>\
						</select>\
					</div>\
					<br>\
					</div>')($scope));
		$compile(a)($scope);
		$scope.count++;
		}

		$scope.submitRequestKK = function() {
			console.log($scope.nik_keluarga);
			var params = angular.copy({});
			params.nik = [];
			params.nik_kepala_kel = $scope.nik_keluarga_0;
			params.anggota_count = $scope.count - 1;
			for (var i = 1; i <= params.anggota_count; ++i) {
				params.nik[i] = $scope.nik_keluarga[i-1]; 
			}
			Server.post('kk/request', params).then(function(data) {
				console.log(data);
			}, function(err) {
				console.log(err);
			})
			// console.log($scope.nik_keluarga_0);
			console.log('create kk tombol ketekan');
		}
	}]
);