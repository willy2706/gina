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
	return this;
});
