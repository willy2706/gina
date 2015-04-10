var ginaAppValidator = angular.module('ginaApp.validators', []);

ginaAppValidator.directive('nikValidator', function ($http, $q, ApiURL, $timeout) {
	return {
        // console.log('aa');
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