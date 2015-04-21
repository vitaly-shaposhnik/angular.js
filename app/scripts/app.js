'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test-page', {
        templateUrl: 'views/test-page.html',
        controller: 'TestPageCtrl'
      })
      .when('/cars', {
        templateUrl: 'views/cars.html',
        controller: 'CarsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
