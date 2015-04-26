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
		$scope.nik_keluarga[0] = User.nik;
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
			a = $compile(a)($scope);
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
			params.alamat = $scope.alamat;
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
		}
	}]
);

ginaAppControllers.controller('KKIndexCtrl', ['$scope', '$compile', 'Server', 'User', '$state',
	function ($scope, $compile, Server, User, $state) {
		$scope.init = function() {
			Server.get('kk/status/' + User.nik).then(function(data) {
				$scope.datas = data;
				$scope.canRequest = true;
				for (var i = 0; i < data.length; ++i) {
					if (data[i].status == 'approved' || data[i].status == 'requested') {
						$scope.canRequest = false;
					}
				}
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});

		$scope.request = function () {
			$state.go('kk-request');
		}
	}]
);

ginaAppControllers.controller('KtpIndexCtrl', ['$scope', '$compile', 'Server', 'User', '$state',
	function ($scope, $compile, Server, User, $state) {
		$scope.isLogged = User.isLogged;
		Server.get('ktp/index/'+User.nik).then(function(data) {
			$scope.data = data;
			console.log(data);
		}, function(err){
			console.log(err)
		})

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('KKAdminIndexCtrl', ['$scope', '$compile', 'Server', 'User', '$state',
	function ($scope, $compile, Server, User, $state) {
		$scope.init = function() {
			Server.get('admin/kk/all').then(function(data) {
				console.log(data);
				$scope.datas = data;
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;	
		console.log($scope.isLogged);
		$scope.statusIncludes = [];

		$scope.create = function() {
			$state.go('kk-admin-create')
		}

		$scope.approve = function($no_kk)  {
			Server.get('admin/kk/approve/' + $no_kk).then(function(data) {
				// console.log(data);
				alert('berhasil di approve');
				$scope.init();
			}, function(err){
				console.log(err);
			});
		}

		$scope.reject = function($no_kk) {
			var params = angular.copy({});
			params.message = 'ga ada alasan';
			Server.post('admin/kk/reject/' + $no_kk, params).then(function(data) {
				alert('berhasil di reject');
				$scope.init();
				console.log(data);
			}, function(err) {
				console.log(err);
			});
		}

		$scope.includeStatus = function($status) {
			var i = $.inArray($status, $scope.statusIncludes);
			if (i > -1) { //berarti uda ada
				$scope.statusIncludes.splice(i, 1); //jadi dibuang
			} else {
				$scope.statusIncludes.push($status);
			}
			console.log($scope.statusIncludes);
		}

		$scope.statusFilter = function (data) {
			if ($scope.statusIncludes.length > 0) {
				if ($.inArray(data.status, $scope.statusIncludes) < 0)
					return;
			}
			return data;
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('KtpAdminIndexCtrl', ['$scope', '$compile', 'Server', 'User', '$state',
	function ($scope, $compile, Server, User, $state) {
		$scope.init = function() {
			Server.get('admin/ktp/all').then(function(data) {
				$scope.datas = data;
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;	
		console.log($scope.isLogged);

		$scope.create = function() {
			$state.go('ktp-admin-create')
		}

		$scope.detail = function($nik)  {
			$state.go('ktp-admin-detail', {'id' : $nik})
		}

		$scope.edit = function($nik) {
			// $state.go('ktp-admin-detail', {'id' : $nik})
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('KKAdminDetailCtrl', ['$scope', 'Server', '$stateParams', 'User',
	function ($scope, Server, $stateParams, User) {
		$scope.isLogged = User.isLogged;
		Server.get('admin/kk/view/' + $stateParams.id)
		.then(function(data) {
			console.log($stateParams.id);
			console.log(data);
			$scope.datas = data;
		}, function(err) {

		});
		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('KtpAdminDetailCtrl', ['$scope', 'Server', '$stateParams', 'User',
	function ($scope, Server, $stateParams, User) {
		$scope.isLogged = User.isLogged
		Server.get('ktp/index/' + $stateParams.id)
		.then(function(data) {
			console.log(data);
			$scope.data = data;
		}, function(err) {

		});
		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);


ginaAppControllers.controller('KtpAdminCreateCtrl', ['$scope', 'User',
	function ($scope, User) {
		$scope.nama = null
		$scope.isLogged = User.isLogged
		$scope.jenis_kelamin = 'Laki-Laki'
		$scope.jenis_kelamin_list = ['Laki-Laki', 'Perempuan']
		$scope.gol_darah = 'O'
		$scope.gol_darah_list = ['O', 'A', 'B', 'AB']
		$scope.agama = ""
		$scope.agama_list = ['','Islam', 'Kristen Protestan', 'Kristen Katolik', 'Budha', 'Hindu']
		$scope.rt = 0;
		$scope.rw = 0;
		$scope.create = function() {
			console.log($scope.nama)
		}
	}]
)

ginaAppControllers.controller('KKAdminCreateCtrl', ['$scope', '$compile', 'Server', 'User', '$state',
	function ($scope, $compile, Server, User, $state) {
		$scope.isLogged = User.isLogged;
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
							<input nik-validator nik-kk-validator ng-model = nik_keluarga['+$scope.count+'] class="form-control" type="text" name="nik_keluarga_'+$scope.count+'" placeholder="NIK anggota keluarga" required/>\
							<div ng-if="createKKForm.nik_keluarga_'+$scope.count+'.$dirty">\
			                    <div ng-messages="createKKForm.nik_keluarga_'+$scope.count+'.$error" class="validation-error">\
			                        <div ng-message="nik">Nik tidak valid</div>\
			                        <div ng-message="required">Nik required</div>\
			                        <div ng-message="kk">Telah terdaftar sebagai di kk lain</div>\
			                    </div>\
			                    <div ng-messages="createKKForm.nik_keluarga_'+$scope.count+'.$pending" class="validation-pending">\
			                        <div ng-message="nik">Cek Nik</div>\
			                    </div>\
			                </div>\
						</div>\
					</div>')($scope));
			a = $compile(a)($scope);
			a = $compile(a)($scope);
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
			params.alamat = $scope.alamat;
			for (var i = 1; i <= params.anggota_count + 1; ++i) {
				params.nik[i] = $scope.nik_keluarga[i-1];
				params.status_hub[i] = $scope.status_hub[i-1];
				params.pendidikan[i] = $scope.status_hub[i-1];
			}
			Server.post('admin/kk/create', params).then(function(data) {
				console.log(data);
				$state.go("kk-admin")
			}, function(err) {
				console.log(err);
			})
		}
	}]
);

ginaAppControllers.controller('CreateAktaLahirCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.isFetchingData = false;
		$scope.isLogged = User.isLogged;
		if ($scope.isLogged) {
			$scope.isFetchingData = true;
			Server.get('check/aktalahirstatus/' + User.nik).then(function(data) {
				console.log(data);
				if (data == 'requested') {
					$scope.isRequested = true;
				} else {
					$scope.isRequested = false;
				}
				$scope.isFetchingData = false;
			});
		}

		// TODO gunanya init buat apa
		$scope.jenis_kelamin = [];
		$scope.jenis_kelamin_data = ["Laki-Laki", "Perempuan"];
		$scope.jenis_kelamin_init = "Laki-Laki";

		// TODO gunanya init buat apa
		$scope.kewarganegaraan = "Warga Negara Indonesia";
		$scope.kewarganegaraan_data = ["Warga Negara Indonesia", "Warga Negara Asing"];
		$scope.kewarganegaraan_init = ["Warga Negara Indonesia"];

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});

		$scope.submitRequestAktaLahir = function() {
			var params = angular.copy({});

			params.nama = $scope.nama;
			params.tempat_lahir = $scope.tempat_lahir;
			params.tgl_lahir = $scope.tgl_lahir;
			params.anak_ke = $scope.anak_ke;
			params.jenis_kelamin = $scope.jenis_kelamin;
			params.nik_ayah = $scope.nik_ayah;
			params.nik_ibu = $scope.nik_ibu;
			params.kewarganegaraan = $scope.kewarganegaraan;

			Server.post('aktalahir/request', params).then(function(data) {
				$scope.isRequested = true;
			}, function(err) {
				console.log(err);
			})
		}
	}]
);

ginaAppControllers.controller('AktaLahirAdminIndexCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.init = function() {
			Server.get('admin/aktalahir/all').then(function(data) {
				$scope.datas = data;
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;
		$scope.statusIncludes = [];

		$scope.approve = function($no_akta)  {
			Server.get('admin/aktalahir/approve/' + $no_akta).then(function(data) {
				$scope.init();
			}, function(err){
				console.log(err);
			});
		}

		$scope.reject = function($no_akta) {
			var params = angular.copy({});
			params.message = 'lala';
			Server.post('admin/aktalahir/reject/' + $no_akta, params).then(function(data) {
				$scope.init();
				console.log(data);
			}, function(err) {
				console.log(err);
			});
		}

		$scope.includeStatus = function($status) {
			var i = $.inArray($status, $scope.statusIncludes);
			if (i > -1) { //berarti uda ada
				$scope.statusIncludes.splice(i, 1); //jadi dibuang
			} else {
				$scope.statusIncludes.push($status);
			}
			console.log($scope.statusIncludes);
		}

		$scope.statusFilter = function (data) {
			if ($scope.statusIncludes.length > 0) {
				if ($.inArray(data.status, $scope.statusIncludes) < 0)
					return;
			}
			return data;
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('AktaLahirAdminDetailCtrl', ['$scope', 'Server', '$stateParams',
	function ($scope, Server, $stateParams) {
		Server.get('admin/aktalahir/view/' + $stateParams.id)
		.then(function(data) {
			console.log($stateParams.id);
			console.log(data);
			$scope.datas = data;
		}, function(err) {
			console.log(err);
		});

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('CreateAktaMatiCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.isFetchingData = false;
		$scope.isLogged = User.isLogged;
		if ($scope.isLogged) {
			$scope.isFetchingData = true;
			Server.get('check/aktamatistatus/' + User.nik).then(function(data) {
				console.log(data);
				if (data == 'requested') {
					$scope.isRequested = true;
				} else {
					$scope.isRequested = false;
				}
				$scope.isFetchingData = false;
			});
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});

		$scope.submitRequestAktaMati = function() {
			var params = angular.copy({});

			params.nik = $scope.nik;
			params.kota_meninggal = $scope.kota_meninggal;
			params.waktu_meninggal = $scope.waktu_meninggal;

			Server.post('aktamati/request', params).then(function(data) {
				$scope.isRequested = true;
			}, function(err) {
				console.log(err);
			})
		}
	}]
);

ginaAppControllers.controller('AktaMatiAdminIndexCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.init = function() {
			Server.get('admin/aktamati/all').then(function(data) {
				$scope.datas = data;
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;
		$scope.statusIncludes = [];

		$scope.approve = function($no_akta)  {
			Server.get('admin/aktamati/approve/' + $no_akta).then(function(data) {
				$scope.init();
			}, function(err){
				console.log(err);
			});
		}

		$scope.reject = function($no_akta) {
			var params = angular.copy({});
			params.message = 'lala';
			Server.post('admin/aktamati/reject/' + $no_akta, params).then(function(data) {
				$scope.init();
				console.log(data);
			}, function(err) {
				console.log(err);
			});
		}

		$scope.includeStatus = function($status) {
			var i = $.inArray($status, $scope.statusIncludes);
			if (i > -1) { //berarti uda ada
				$scope.statusIncludes.splice(i, 1); //jadi dibuang
			} else {
				$scope.statusIncludes.push($status);
			}
			console.log($scope.statusIncludes);
		}

		$scope.statusFilter = function (data) {
			if ($scope.statusIncludes.length > 0) {
				if ($.inArray(data.status, $scope.statusIncludes) < 0)
					return;
			}
			return data;
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('AktaMatiAdminDetailCtrl', ['$scope', 'Server', '$stateParams',
	function ($scope, Server, $stateParams) {
		Server.get('admin/aktamati/view/' + $stateParams.id)
		.then(function(data) {
			console.log($stateParams.id);
			console.log(data);
			$scope.datas = data;
		}, function(err) {
			console.log(err);
		});

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

/**
  * AKTA KAWIN
  */

ginaAppControllers.controller('CreateAktaKawinCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.isFetchingData = false;
		$scope.isLogged = User.isLogged;
		if ($scope.isLogged) {
			$scope.isFetchingData = true;
			Server.get('check/aktakawinstatus/' + User.nik).then(function(data) {
				console.log(data);
				if (data == 'requested') {
					$scope.isRequested = true;
				} else {
					$scope.isRequested = false;
				}
				$scope.isFetchingData = false;
			});
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});

		$scope.submitRequestAktaKawin = function() {
			var params = angular.copy({});

			params.nik_suami = $scope.nik_suami;
			params.nik_istri = $scope.nik_istri;
			params.tanggal_nikah = $scope.tanggal_nikah;
			params.tempat_nikah = $scope.tempat_nikah;

			Server.post('aktakawin/request', params).then(function(data) {
				$scope.isRequested = true;
			}, function(err) {
				console.log(err);
			})
		}
	}]
);

ginaAppControllers.controller('AktaKawinAdminIndexCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.init = function() {
			Server.get('admin/aktakawin/all').then(function(data) {
				$scope.datas = data;
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;
		$scope.statusIncludes = [];

		$scope.approve = function($no_akta)  {
			Server.get('admin/aktakawin/approve/' + $no_akta).then(function(data) {
				$scope.init();
				console.log(data);
			}, function(err){
				console.log(err);
			});
		}

		$scope.reject = function($no_akta) {
			var params = angular.copy({});
			params.message = 'lala';
			Server.post('admin/aktakawin/reject/' + $no_akta, params).then(function(data) {
				$scope.init();
				console.log(data);
			}, function(err) {
				console.log(err);
			});
		}

		$scope.includeStatus = function($status) {
			var i = $.inArray($status, $scope.statusIncludes);
			if (i > -1) { //berarti uda ada
				$scope.statusIncludes.splice(i, 1); //jadi dibuang
			} else {
				$scope.statusIncludes.push($status);
			}
			console.log($scope.statusIncludes);
		}

		$scope.statusFilter = function (data) {
			if ($scope.statusIncludes.length > 0) {
				if ($.inArray(data.status, $scope.statusIncludes) < 0)
					return;
			}
			return data;
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('AktaKawinAdminDetailCtrl', ['$scope', 'Server', '$stateParams',
	function ($scope, Server, $stateParams) {
		Server.get('admin/aktakawin/view/' + $stateParams.id)
		.then(function(data) {
			console.log($stateParams.id);
			console.log(data);
			$scope.datas = data;
		}, function(err) {
			console.log(err);
		});

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

/**
  * AKTA CERAI
  */

ginaAppControllers.controller('CreateAktaCeraiCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.isFetchingData = false;
		$scope.isLogged = User.isLogged;
		if ($scope.isLogged) {
			$scope.isFetchingData = true;
			Server.get('check/aktakawinexiststatus/' + $scope.akta_cerai).then(function(data) {
				console.log(data);
				if (data == 'exist') {
					$scope.isRequested = true;
				} else {
					$scope.isRequested = false;
				}
				$scope.isFetchingData = false;
			});
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});

		$scope.submitRequestAktaCerai = function() {
			var params = angular.copy({});

			params.akta_kawin = $scope.akta_kawin;
			params.tanggal_cerai = $scope.tanggal_cerai;
			params.tempat_cerai = $scope.tempat_cerai;

			Server.post('aktacerai/request', params).then(function(data) {
				$scope.isRequested = true;
			}, function(err) {
				console.log(err);
			})
		}
	}]
);

ginaAppControllers.controller('AktaCeraiAdminIndexCtrl', ['$scope', '$compile', 'Server', 'User',
	function ($scope, $compile, Server, User) {
		$scope.init = function() {
			Server.get('admin/aktacerai/all').then(function(data) {
				$scope.datas = data;
			}, function(err) {
				console.log(err);
			});
		}
		$scope.isLogged = User.isLogged;
		$scope.statusIncludes = [];

		$scope.approve = function($no_akta)  {
			Server.get('admin/aktacerai/approve/' + $no_akta).then(function(data) {
				$scope.init();
				console.log(data);
			}, function(err){
				console.log(err);
			});
		}

		$scope.reject = function($no_akta) {
			var params = angular.copy({});
			params.message = 'lala';
			Server.post('admin/aktacerai/reject/' + $no_akta, params).then(function(data) {
				$scope.init();
				console.log(data);
			}, function(err) {
				console.log(err);
			});
		}

		$scope.includeStatus = function($status) {
			var i = $.inArray($status, $scope.statusIncludes);
			if (i > -1) { //berarti uda ada
				$scope.statusIncludes.splice(i, 1); //jadi dibuang
			} else {
				$scope.statusIncludes.push($status);
			}
			console.log($scope.statusIncludes);
		}

		$scope.statusFilter = function (data) {
			if ($scope.statusIncludes.length > 0) {
				if ($.inArray(data.status, $scope.statusIncludes) < 0)
					return;
			}
			return data;
		}

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);

ginaAppControllers.controller('AktaCeraiAdminDetailCtrl', ['$scope', 'Server', '$stateParams',
	function ($scope, Server, $stateParams) {
		Server.get('admin/aktacerai/view/' + $stateParams.id)
		.then(function(data) {
			console.log($stateParams.id);
			console.log(data);
			$scope.datas = data;
		}, function(err) {
			console.log(err);
		});

		$scope.$on('logoutEvent', function(event, data) {
			$scope.isLogged = User.isLogged;
		});
	}]
);
