angular.module('o8.search', [])

.directive('oSearch', function($http) {

  return {
    restrict : 'A',
    link : function(scope, el) {
      scope.submit = function(searchText) {
        scope.processing = true;
        $http.post('/questions', {
          text : searchText,
        }).then(function() {
          alert('success')
        }, function() {
          alert('Something went wrong...\nPlease try again later.')
        })['finally'](function() {
          scope.processing = false;
        })
      }
    }
  }

});
