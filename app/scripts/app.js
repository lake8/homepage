'use strict';

angular
  .module('app', [
    'o8.search',
    'o8.signup',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
  ])

  .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        url: '/',
        views : {
          'root' : {
            templateUrl: 'views/main.html',
          }
        }
      })

      .state('signup', {
        url: '/signup',
        views : {
          'root' : {
            templateUrl: 'views/signup.html',
          }
        }
      });
  })




   .run(function($rootScope, $state) {



   });

