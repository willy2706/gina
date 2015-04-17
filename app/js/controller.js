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

ginaAppControllers.controller('CreateMutasiCtrl', ['$scope', '$compile', 'Server', 'User',
	function($scope, $compile, Server, User) {
		$scope.isLogged = User.isLogged;
		$scope.status_hub = [];
		$scope.status_hub_data = ["Istri", "Suami", "Anak", "Cucu", "Lainnya..."];
		$scope.status_hub_data_init = ["Lainnya..."];
		$scope.count = 0;
		$scope.nik_pengikut = [];
		$scope.addPengikut = function(){
			$scope.status_hub[$scope.count] = "Lainnya...";
			var a = angular.element(document.getElementById('form-mutasi'))
				.append($compile('<div class="form-inline" id="row_'+$scope.count+'">\
						<div class="form-group cust-form">\
							<input nik-validator ng-model = nik_pengikut['+$scope.count+'] class="form-control" type="text" name="nik_pengikut_'+$scope.count+'" placeholder="NIK pengikut" required/>\
							<div ng-if="createMutasiForm.nik_pengikut_'+$scope.count+'.$dirty">\
			                    <div ng-messages="createMutasiForm.nik_pengikut_'+$scope.count+'.$error" class="validation-error">\
			                        <div ng-message="nik">Nik tidak valid</div>\
			                        <div ng-message="required">Nik required</div>\
			                    </div>\
			                    <div ng-messages="createMutasiForm.nik_pengikut_'+$scope.count+'.$pending" class="validation-pending">\
			                        <div ng-message="nik">Cek Nik</div>\
			                    </div>\
			                </div>\
						</div>\
					</div>')($scope));
			$compile(a)($scope);
			var id = "row_" + $scope.count;
			var b = angular.element(document.getElementById(id))
					.append($compile('<div class="form-group cust-form">\
							<select class="form-control" ng-model="status_hub['+$scope.count+']" ng-options="s for s in status_hub_data">\
							</select>\
						</div>')($scope));
			$scope.count++;
		}

		$scope.$on('logoutEvent', function(event, data) {
			// console.log(data);
			// console.log('aaaaa');
			$scope.isLogged = User.isLogged;
		});

		$scope.submitRequestMutasi = function() {
			// console.log($scope.alasan);
			// console.log($scope.alamat_tujuan);
			// console.log("submit mutasi");
			// console.log($scope.count);
			// console.log($scope.nik_pengikut[0]);
			//console.log(User.nik);
			var params = angular.copy({});
			params.nik = User.nik;
			params.nik_pengikut = [];
			params.status_kel = [];
			params.pekerjaan = [];
			params.alamat_tujuan = $scope.alamat_tujuan;
			params.alasan = $scope.alasan;
			params.pengikut_count = $scope.count;
			for (var i = 1; i <= params.pengikut_count; i++) {
				params.nik_pengikut[i] = $scope.nik_pengikut[i-1];
				params.status_kel[i] = $scope.status_hub[i-1];
				params.pekerjaan[i] = "kerjaan";
			}
			Server.post('mp/request', params).then(function(data) {
				console.log(data);
			}, function(err) {
				console.log(err);
			})
		}
	}]
);

ginaAppControllers.controller('CreateKKCtrl', ['$scope', '$compile', 'Server', 'User',
	function($scope, $compile, Server, User) {
		$scope.isFetchingData = false;
		$scope.isLogged = User.isLogged;
		if ($scope.isLogged) {
			$scope.isFetchingData = true;	
			Server.get('check/kkstatus/'+User.nik).then(function(data) {
				if (data == 'requested') $scope.isRequested = true;
				else $scope.isRequested = false;
				$scope.isFetchingData = false;
			});
		}
		$scope.status_hub = [];
		$scope.status_hub[0] = "Kepala Keluarga";
		$scope.status_hub_data = ["Istri", "Suami", "Anak", "Cucu"];
		$scope.status_hub_data_init = ["Kepala Keluarga"];
		$scope.count = 1;
		$scope.nik_keluarga = [];
		$scope.pend_kel = [];
		$scope.pend_kel = ["SD"];
		$scope.pend_kel_data = ["SD", "SMP", "SMA", "S1", "S2", "S3"];
		$scope.addKeluarga = function() {
			$scope.status_hub[$scope.count] = "Istri";
			$scope.pend_kel[$scope.count] = "SD";
			var a = angular.element(document.getElementById('form-keluarga'))
				.append($compile('<div class="form-inline" id="row_'+$scope.count+'">\
						<div class="form-group cust-form">\
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
					</div>')($scope));
			$compile(a)($scope);
			var id = "row_" + $scope.count;
			var b = angular.element(document.getElementById(id))
					.append($compile('<div class="form-group cust-form">\
							<select class="form-control" ng-model="status_hub['+$scope.count+']" ng-options="s for s in status_hub_data">\
							</select>\
						</div>\
						<div class="form-group cust-form">\
							<select class="form-control" ng-model="pend_kel['+$scope.count+']" ng-options="s for s in pend_kel_data">\
							</select>\
						</div>')($scope));
			$scope.count++;
		}

		$scope.$on('logoutEvent', function(event, data) {
			// console.log(data);
			// console.log('aaaaa');
			$scope.isLogged = User.isLogged;
		});

		$scope.submitRequestKK = function() {
			console.log($scope.nik_keluarga);
			console.log($scope.status_hub);
			console.log($scope.pend_kel);
			var params = angular.copy({});
			params.nik = [];
			params.status_hub = [];
			params.pendidikan = [];
			params.nik_kepala_kel = $scope.nik_keluarga[0];
			params.anggota_count = $scope.count;
			for (var i = 1; i <= params.anggota_count + 1; ++i) {
				params.nik[i] = $scope.nik_keluarga[i-1];
				params.status_hub[i] = $scope.status_hub[i-1];
				params.pendidikan[i] = $scope.status_hub[i-1];
			}
			Server.post('kk/request', params).then(function(data) {
				console.log(data);
				$scope.isRequested = true;
			}, function(err) {
				console.log(err);
			})
			console.log('create kk tombol ketekan');
		}
	}]
);

ginaAppControllers.controller('AdminKKCtrl', ['$scope', 
	function($scope) {

	}]
);

ginaAppControllers.controller('AppKKCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		Server.get('admin/kk/all').then(function(data) {
			console.log(data);
			$scope.datas = data;
		}, function(err) {
			console.log(err);
		});

		$scope.approve = function($no_kk)  {
			// console.log($no_kk);
			Server.get('admin/kk/approve/' + $no_kk).then(function(data) {
				console.log(data);
			}, function(err){
				console.log(err);
			});
		}

		$scope.reject = function($no_kk) {
			
		}
	}]
);