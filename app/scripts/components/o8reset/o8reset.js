angular.module('o8.signup', ['o8.dev'])

.directive('oReset', function($http, oDev) {

  return {
    restrict : 'A',

    link : function(scope, el) {

      scope.submit = function(user) {
        delete scope.error;
        $http.post('https://api.ocean8.co/api/users/reset-password', user)
        .then(function(res) {
          alert('success')
        }, function(err) {
          if(err.status === 401) {
            scope.error = 'Sorry. Access denied.'
          } else {
            scope.error = 'Sorry. We have problem on our end. Please try to request a password reset again.'
          }

        });
      }
    }
  }

});

