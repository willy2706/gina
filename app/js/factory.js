var ginaAppFactory = angular.module('ginaApp.factories', []);

ginaAppFactory.factory('User', function($sessionStorage) {
	var self = this;
	self.id = '';
	self.nama = '';
	self.isLogged = false;
	self.nik = '';
	self.isAdmin = false;
	if ($sessionStorage.user) {
		self = $sessionStorage.user;
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