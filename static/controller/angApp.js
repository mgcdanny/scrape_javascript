
var angApp = angular.module('angApp', ['ngResource','ngRoute']);

angApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'static/partial/home.html',
        controller: 'homeCtrl'
      }).
      when('/detail/:detailId', {
        templateUrl: 'static/partial/detail.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


