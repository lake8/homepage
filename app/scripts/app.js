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
    $locationProvider.html5Mode(false);

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
      })

      .state('reset', {
        url: '/reset?token&id',
        views : {
          'root' : {
            controller : function($scope, $stateParams) {
              $scope.user = {
                resetToken : $stateParams.token,
                id: $stateParams.id
              };
            },
            templateUrl: 'views/reset.html',
          }
        }
      })

      .state('tcs', {
        url: '/tcs',
        views : {
          'root' : {
            templateUrl: 'views/tcs.html',
          }
        }
      })


      .state('privacy', {
        url: '/privacy',
        views : {
          'root' : {
            templateUrl: 'views/privacy.html',
          }
        }
      })
  })




   .run(function($rootScope, $state) {



   });

