angular.module('o8.dev', [])

.factory('oDev', function() {

  return {

    createSignupModel : function() {
      return {
        name : 'p-unit',
        email: 'p@unit.co',
        password : 'Admin1234'
      }
    }

  }

});
