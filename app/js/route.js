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
      .state('kk', {
        url: "/kk",
        templateUrl: "app/partials/create-kk.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('kk-admin', {
        url: "/kk-admin",
        templateUrl: "app/partials/kk-approval.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      // .state('features-app', {
      //   url: "/features/app",
      //   templateUrl: "app/partials/kk-approval.html",
      //   controller: function($scope) {
      //     // $scope.isFeatures = true;
      //   }
      // })
      .state('kk-admin-approve', {
        url: "/kk-admin/approve/:id",
        templateUrl: "app/partials/detailpembuatankk.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('mp', {
        url: '/mp',
        templateUrl: 'app/partials/create-mutasi.html',
        controller: function($scope) {
          // $scope.isBlog = true;
        }
      })
      .state('mp-app', {
        url: '/mp/app',
        templateUrl: 'app/partials/mutasi-approval.html',
        controller: function($scope) {
          // $scope.isBlog = true;
        }
      })
      .state('detailmutasi', {
        url: '/blog/detail',
        templateUrl: 'app/partials/detailmutasi.html',
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