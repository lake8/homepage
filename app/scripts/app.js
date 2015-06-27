'use strict';

angular
  .module('app', [
    'o8.search',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
  ])

  .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        url: '/',
        views : {
          'root' : {
            templateUrl: 'views/main.html',
          }
        }
      })

      .state('question', {
        url: '/questions/:slug',
        views : {
          'root' : {
            templateUrl: 'views/question.html',
          }
        }
      });
  })




   .run(function($rootScope, $state) {});

