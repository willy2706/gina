var ginaRoutes = angular.module('ginaApp.routes', []);

ginaRoutes.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider, $scope) {
    // $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('phones', {
        url: '/phones',
        templateUrl: 'app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      })
      .state('phonesID', {
        url: '/phones/:phoneId',
        templateUrl: 'app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .state('home', {
        url: "/",
        templateUrl: "app/partials/index.html",
        controller: function($scope) {
          // $scope.isHome = true;
        }
      })
      .state('features', {
        url: "/features",
        templateUrl: "app/partials/features.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/partials/blog.html',
        controller: function($scope) {
          // $scope.isBlog = true;
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/partials/about.html',
        controller: ''
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/partials/datakependudukan.html',
        controller: ''
      })
  }]);