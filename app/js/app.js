var ginaApp = angular.module('ginaApp', [
  'ui.router',
  'ginaApp.controllers',
  'ginaApp.routes',
  'ginaApp.header',
  'ginaApp.factories',
  'ginaApp.constants',
  'ginaApp.validators',
  'ngMessages',
  'ngStorage',
  'angularMoment'
]);

ginaApp.filter('moment', function() {
    return function(input) {
        return moment(input);
    };
});