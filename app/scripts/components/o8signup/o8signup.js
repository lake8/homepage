angular.module('o8.signup', ['o8.dev'])

.directive('oSignup', function($http, oDev) {

  return {
    restrict : 'A',
    link : function(scope, el) {

      scope.populate = function() {
        scope.user = oDev.createSignupModel();
      }

      scope.submit = function(searchText) {
        scope.processing = true;
        $http.post('/api/users', {
          text : searchText,
        }).then(function() {
          alert('success')
        }, function() {
          alert('Dummy form submitted. Was validation alright')
        })['finally'](function() {
          scope.processing = false;
        })
      }
    }
  }

});
