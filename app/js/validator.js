var ginaAppValidator = angular.module('ginaApp.validators', []);

ginaAppValidator.directive('nikValidator', function ($http, $q, ApiURL, $timeout) {
	return {
		require: 'ngModel',
		// replace: true,
		// templateUrl: "app/partials/a.html",
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.nik = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/nik/' + viewValue).then(
					function(response) {
						var deferred = $q.defer();
						if (response.data == "false")  deferred.reject();
						else deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

ginaAppValidator.directive('nikKkValidator', function ($http, $q, ApiURL, $timeout) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.kk = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/kkstatus/' + viewValue).then(
					function(response) {
						console.log(response);
						var deferred = $q.defer();
						if (response.data == "requested" || response.data == "approved")  deferred.reject();
						else deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

ginaAppValidator.directive('noaktakawinValidator', function ($http, $q, ApiURL, $timeout) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.noaktakawin = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/noaktakawin/' + viewValue).then(
					function(response) {
						var deferred = $q.defer();
						if (response.data == "false")  deferred.reject();
						else deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

ginaAppValidator.directive('noaktalahirValidator', function ($http, $q, ApiURL, $timeout) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.noaktalahir = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/noaktalahir/' + viewValue).then(
					function(response) {
						var deferred = $q.defer();
						if (response.data == "false")  deferred.reject();
						else deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

ginaAppValidator.directive('selfaktaceraiValidator', function ($http, $q, ApiURL, $timeout, User) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.selfaktacerai = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/selfaktacerai/' + viewValue + '/' + User.nik).then(
					function(response) {
						console.log(response.data)
						var deferred = $q.defer();
						if (response.data == "false")  deferred.reject();
						else deferred.resolve();
						deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

ginaAppValidator.directive('selfaktakawinValidator', function ($http, $q, ApiURL, $timeout, User) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.selfaktakawin = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/selfaktakawin/' + viewValue + '/' + User.nik).then(
					function(response) {
						console.log(response.data)
						var deferred = $q.defer();
						if (response.data == "false")  deferred.reject();
						else deferred.resolve();
						deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

ginaAppValidator.directive('anaksendiriValidator', function ($http, $q, ApiURL, $timeout, User) {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.anaksendiri = function(modelValue, viewValue) {
				return $http.get(ApiURL + 'check/anaksendiri/' + viewValue + '/' + User.nik).then(
					function(response) {
						console.log(response.data)
						var deferred = $q.defer();
						if (response.data == "false")  deferred.reject();
						else deferred.resolve();
						deferred.resolve();
						return deferred.promise;
					}
				);
			};
		}
	}
});

