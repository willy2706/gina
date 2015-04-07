var ginaAppFactory = angular.module('ginaApp.factories', []);

ginaAppFactory.factory('User', function($sessionStorage) {
	var self = this;
	self.id = '';
	self.nama = '';
	self.isLogged = false;
	if ($sessionStorage.user) {
		self = $sessionStorage.user;
	}
	self.session = function() {
        $sessionStorage.user = self;
    }
    self.reset = function() {
    	self.nama = '';
    	self.id = '';
    	self.isLogged = false;
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
	this.login = function (nik, password) {
		var def = $q.defer();
		var params = angular.copy({});
		params.nik = nik;
		params.password = password
		$http.post(ApiURL + 'auth/login',params).
		success(function(data) {
			def.resolve(data);
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