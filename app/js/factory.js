var ginaAppFactory = angular.module('ginaApp.factories', []);

ginaAppFactory.factory('Server', function($http, $q, ApiURL) {
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
			console.log(data);
			console.log('berhasil');
		}).error(function(err){
			def.reject(err);
			console.log(err);
			console.log('gagal');
		})
		return def.promise;
	}
	return this;
});
