'use strict';

/**
 * @ngdoc overview
 * @name hnStarterApp
 * @description
 * # hnStarterApp
 *
 * Main module of the application.
 */
angular
  .module('hnStarterApp', [
    'ngRoute',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
