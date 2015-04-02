var ginaRoutes = angular.module('ginaApp.routes', []);

ginaRoutes.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $stateProvider.
      state('phones', {
        url: '/phones',
        templateUrl: 'app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      state('phonesID', {
        url: '/phones/:phoneId',
        templateUrl: 'app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      state('home', {
        url: '/',
        templateUrl: 'app/partials/index.html',
        controller: ''
      }).
      state('features', {
        url: '/features',
        templateUrl: 'app/partials/features.html',
        controller: ''
      });
  }]);