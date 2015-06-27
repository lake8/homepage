'use strict';

angular.module('app')
  .controller('SignupCtrl', function ($scope, $http) {



  	$scope.user;

   	$scope.submit = function(form, user) {
   		$http.post('http://ocean8dev.spoc.dev:9000/auth/spoc/users', user, {
   			headers : {
   				'client-id' : '59LYTuJB5kA='
   			}
   		}).then(function(res){
   			console.log('SUCCESS', res)
   		}, function(res) {
   			console.log('ERROR', res)
   		}); 
   	};
  });
