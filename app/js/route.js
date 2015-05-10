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
      .state('ktp', {
        url: "/ktp",
        templateUrl: "app/partials/ktp-index.html",
        controller: function($scope) {
        }
      })
      .state('ktp-admin', {
        url: "/ktp-admin",
        templateUrl: "app/partials/ktp-admin-index.html",
        controller: function($scope) {
        }
      })
      .state('ktp-admin-create', {
        url: "/ktp-admin-create",
        templateUrl: "app/partials/ktp-admin-create.html",
        controller: function($scope) {
        }
      })
      .state('ktp-admin-edit', {
        url: "/ktp-admin-edit/:id",
        templateUrl: "app/partials/ktp-admin-edit.html",
        controller: function($scope) {
        }
      })
      .state('ktp-admin-detail', {
        url: "/ktp-admin/detail/:id",
        templateUrl: "app/partials/ktp-admin-detail.html",
        controller: function($scope) {
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
        url: "/mp",
        templateUrl: "app/partials/mp-index.html",
        controller: function($scope) {
        }
      })
      .state('mp-request', {
        url: '/mp/request',
        templateUrl: 'app/partials/mp-request.html',
        controller: function($scope) {
          // $scope.isBlog = true;
        }
      })
      .state('mp-admin', {
        url: "/mp-admin",
        templateUrl: "app/partials/mp-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('mp-admin-detail', {
        url: "/mp-admin/detail/:id",
        templateUrl: "app/partials/mp-admin-detail.html",
        controller: function($scope) {
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
        templateUrl: "app/partials/akta-lahir-index.html",
        controller: function($scope) {
        }
      })
      .state('akta-lahir-detail', {
        url: "/akta-lahir/detail/:id",
        templateUrl: "app/partials/akta-lahir-detail.html",
        controller: function($scope) {
        }
      })
      .state('akta-lahir-request', {
        url: "/akta-lahir/request",
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
      .state('akta-lahir-admin-create', {
        url: "/akta-lahir-admin/create",
        templateUrl: "app/partials/akta-lahir-admin-create.html",
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
      .state('akta-kawin', {
        url: "/akta-kawin-index",
        templateUrl: "app/partials/akta-kawin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-kawin-request', {
        url: "/akta-kawin/create",
        templateUrl: "app/partials/create-akta-kawin.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-kawin-admin', {
        url: "/akta-kawin-admin",
        templateUrl: "app/partials/akta-kawin-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-kawin-admin-create', {
        url: "/akta-kawin-admin/create",
        templateUrl: "app/partials/akta-kawin-admin-create.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-kawin-admin-detail', {
        url: "/akta-kawin-admin/detail/:id",
        templateUrl: "app/partials/akta-kawin-admin-detail.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-cerai', {
        url: "/akta-cerai",
        templateUrl: "app/partials/create-akta-cerai.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-cerai-admin', {
        url: "/akta-cerai-admin",
        templateUrl: "app/partials/akta-cerai-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-cerai-admin-detail', {
        url: "/akta-cerai-admin/detail/:id",
        templateUrl: "app/partials/akta-cerai-admin-detail.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-sah-aku-anak', {
        url: "/akta-sah-aku-anak",
        templateUrl: "app/partials/create-akta-sah-aku-anak.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-sah-aku-anak-admin', {
        url: "/akta-sah-aku-anak-admin",
        templateUrl: "app/partials/akta-sah-aku-anak-admin-index.html",
        controller: function($scope) {
          // $scope.isFeatures = true;
        }
      })
      .state('akta-sah-aku-anak-admin-detail', {
        url: "/akta-sah-aku-anak-admin/detail/:id",
        templateUrl: "app/partials/akta-sah-aku-anak-admin-detail.html",
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