/**
 *  app
 */

'use strict';

var App = angular.module('myApp',["ngRoute"]);

App.config(function($routeProvider){
	
	$routeProvider
		.when("/",{
			templateUrl:"login.jsp",
			controller:"LoginController",
			controllerAs: "ctrl"
		})
		.when("/teams",{
			templateUrl:"team.jsp",
			controller:"TeamController",
			controllerAs: "ctrl",
			authenticated:true
		})
		.when("/ptalloc",{
			templateUrl:"project.jsp",
			controller:"ProjectController",
			controllerAs:"pctrl",
			authenticated:true
		})
		.when("/admin/{regex(^object-[0-9]*$)",{
			templateUrl:"admin.jsp",
			controller:"ResourceController",
			controllerAs: "ctrl",
			authenticated:true
			
		})
		.when("/admin",{
			templateUrl:"admin.jsp",
			controller:"ResourceController",
			controllerAs: "ctrl",
			authenticated:true
			
		})
		/*.otherwise({
            redirectTo: "/"
        })*/
		
})

App.directive('checkPermissions', ['PermissionsServices', function(PermissionsServices) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs, ctrl) {

            if (attrs.permissions != '') {
                var hasPermission = PermissionsServices.hasAccess(attrs.checkPermissions);

                if (false == hasPermission) {
                    elem.remove();
                }
            } else {
                elem.remove();
            }
        }
    };
}]);

