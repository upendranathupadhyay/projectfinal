/**
 * login controller
 */

'use strict'

App.controller('LoginController',['$location','LoginService',function($location,LoginService){
	
	var self = this;
	self.user={username:'',password:'',role:''}
	self.message={code:null,msg:''}
	self.permission=false;
	
	self.getCredentials = function(){
		console.debug(self.user)
		
		LoginService.getCredentials(self.user)
			.then(
					
					function(d){
						
						self.user.role = d;
						console.log(self.user);
						if(self.user.role == 'ADMIN')
						{
							alert("admin")
							self.permission = true;
							$location.path('/admin')
							console.debug(self.permission)
						}
						else if(self.user.role == 'USER')
						{
							
							self.permission = false;
							$location.path('/ptalloc')
							console.debug(self.permission)
						}
						
					},
					function(errResponse){
						
						console.error('Error while checking credentials');
					}
				);
	};
	
	
	
}]);