/**
 * login service
 */

'use strict';

App.factory('LoginService',['$http','$q',function($http,$q){
	
	
	
	return{
		
		getCredentials : function(user){
			console.debug(user)
			return $http.post('http://localhost:8085/resource_management/login/user',user)
				.then(
						function(response){
							
                        	console.debug(response.data)
                            return response.data;
                        }, 
                        function(errResponse){
                            console.error('Error while checking credentials');
                            return $q.reject(errResponse);
                        }
					);
		}
		
	}	
		
}]);

App.service('PermissionsServices', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});