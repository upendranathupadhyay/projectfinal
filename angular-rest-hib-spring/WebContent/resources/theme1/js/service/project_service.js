/**
 * resource service
 */

'use strict';

App.factory('ProjectService',['$http','$q',function($http,$q){
	
	return {
        
		
		createProject: function(project)
		{
			
			return $http.put('http://localhost:8085/resource_management/projectManager/createProject',project)
					.then(
							function(response){
								
								  return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while creating project');
                                return $q.reject(errResponse);
                            }
					
					);
		},
		createTeam: function(team)
		{
			
			return $http.put('http://localhost:8085/resource_management/projectManager/createTeam',team)
					.then(
							function(response){
								
	                            return response.data;
	                        }, 
	                        function(errResponse){
	                            console.error('Error while creating team');
	                            return $q.reject(errResponse);
	                        }
					
					);
		},

		
		assignTeam: function(team,project)
		{
			
			return $http.post('http://localhost:8085/resource_management/projectManager/allocateProjectToTeam/'+project.projectId+"/"+team.teamId)
					.then(
							function(response){
								
	                            return response.data;
	                        }, 
	                        function(errResponse){
	                            console.error('Error while creating team');
	                            return $q.reject(errResponse);
	                        }
					
					);
		},
		
		assignResource:function(rId,team)
		{
			console.error("6")
			console.error(team);
			return $http.get('http://localhost:8085/resource_management/projectManager/addResourceToTeam/'+rId+"/"+team.teamId)
					.then(
							function(response){
								
	                            return response.data;
	                        }, 
	                        function(errResponse){
	                            console.error('Error while assigning resource');
	                            return $q.reject(errResponse);
	                        }
					
					);
			
		},
		
		fetchProject: function(project)
		{
			console.error("service"+project.projectId);
			return $http.get('http://localhost:8085/resource_management/projectManager/getProjectById/'+project.projectId)
					.then(
							function(response){
								return response.data;
							},
							function(errResponse){
								console.error('No project by this id is present');
								return $q.reject(errResponse);
							}
					);
		},
		
		addRoleToResource: function(roleModel)
		{
			console.error(roleModel)
			return $http.put('http://localhost:8085/resource_management/projectManager/addRoleToResource',roleModel)
					.then(
							function(response){
						            return response.data;
	                        }, 
	                        function(errResponse){
	                            console.error('Error while adding role to resource');
	                            return $q.reject(errResponse);
	                        }
					
					);
		}
	};
}]);