var ginaAppFactory = angular.module('ginaApp.factories', []);

ginaAppFactory.factory('User', function($sessionStorage, ApiURL, $http, $q) {
	var self = this;
	self.id = '';
	self.nama = '';
	self.isLogged = false;
	self.nik = '';
	self.isAdmin = false;
	self.check = function() {
		var def = $q.defer()
		// if ($sessionStorage.user) {
		// 	console.log('masuk sini')
		// 	self = $sessionStorage.user;
		// }
		$http.get(ApiURL + 'check/authenticated').then(function(data) {
			if (data.data != 'false') {
				console.log(data.data);
				$http.get(ApiURL + 'check/ktp/' + data.data).then(function(data1) {
					console.log("ok")
					self.id = data1.data.id
					self.nama = data1.data.nama
					self.isLogged = true
					self.nik = data1.data.nik
					self.isAdmin = data1.data.is_admin
					console.log("ok")
					def.resolve();
				}, function (err1) {
					console.log(err1);
					def.reject()
				})
			} else {
				def.reject()
			}
		}, function(err) {
			console.log(err)
			def.reject()
		});
		return def.promise;
	}
	self.session = function() {
        $sessionStorage.user = self;
    }
    self.reset = function() {
    	self.nama = '';
    	self.id = '';
    	self.nik = '';
    	self.isLogged = false;
    	self.isAdmin = false;
    	delete $sessionStorage.user;
    }
	return self;
});

ginaAppFactory.factory('Server', function($http, $q, ApiURL, User) {
	this.get = function(path, params) {
		var def = $q.defer();
		$http.get(ApiURL + path, {params : params}).
		success(function(data){
			def.resolve(data);
		}).error(function(err){
			def.reject(err);
		});
		return def.promise;
	}
	this.post = function(path, params) {
		// console.log('asdfasdfasd');
		var def = $q.defer();
		$http.post(ApiURL + path, params).
		success(function(data){
			def.resolve(data);
		}).error(function(err){
			def.reject(err);
		});
		return def.promise;
	}
	this.login = function (nik, password) {
		var def = $q.defer();
		var params = angular.copy({});
		params.nik = nik;
		params.password = password;
		console.log(ApiURL);
		$http.post(ApiURL + 'auth/login',params).
		success(function(data) {
			if (data == 'false') {
				def.reject('invalid username and password');
			} else {
				def.resolve(data);
			}

			// console.log('aaaa');
		}).error(function(err){
			def.reject(err);
			console.log(err);
		})
		return def.promise;
	}
	this.logout = function() {
		var def = $q.defer();
		$http.get(ApiURL + 'auth/logout')
		.success(function(data) {
			def.resolve(data);
		}).error(function(err) {
			def.reject(err);
		})
		return def.promise;
	}

	return this;
});