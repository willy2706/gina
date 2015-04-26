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
        templateUrl: "app/partials/kk-index.html",
        controller: function($scope) {
        }
      })
      .state('kk-request', {
        url: "/kk/request",
        templateUrl: "app/partials/kk-request.html",
        controller: function($scope) {
        }
      })
      .state('kk-admin', {
        url: "/kk-admin",
        templateUrl: "app/partials/kk-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('kk-admin-detail', {
        url: "/kk-admin/detail/:id",
        templateUrl: "app/partials/kk-admin-detail.html",
        controller: function($scope) {
        }
      })
      .state('kk-admin-create', {
        url: "/kk-admin/create",
        templateUrl: "app/partials/kk-admin-create.html",
        controller: function($scope) {
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
      .state('akta-lahir', {
        url: "/akta-lahir",
        templateUrl: "app/partials/create-akta-lahir.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-lahir-admin', {
        url: "/akta-lahir-admin",
        templateUrl: "app/partials/akta-lahir-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-lahir-admin-detail', {
        url: "/akta-lahir-admin/detail/:id",
        templateUrl: "app/partials/akta-lahir-admin-detail.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-mati', {
        url: "/akta-mati",
        templateUrl: "app/partials/create-akta-mati.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-mati-admin', {
        url: "/akta-mati-admin",
        templateUrl: "app/partials/akta-mati-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-mati-admin-detail', {
        url: "/akta-mati-admin/detail/:id",
        templateUrl: "app/partials/akta-mati-admin-detail.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/partials/datakependudukan.html',
        controller: ''
      })
  }]);