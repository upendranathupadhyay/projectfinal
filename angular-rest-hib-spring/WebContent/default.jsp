<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>default</title>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<link rel="icon" href="data:;base64,iVBORw0KGgo=">
		
		<script src = "https://code.angularjs.org/1.5.6/angular.min.js"></script>
		<script src="https://code.angularjs.org/1.5.6/angular-route.js"></script>
		
		
		
		<link href="<c:url value="/resources/theme1/css/main.css" />" rel="stylesheet">
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

		<style>
			
			  .affix {
			      top: 0;
			      width: 100%;
			  }
			
			  .affix + .container-fluid {
			      padding-top: 70px;
			  }
		</style>


</head>



<body ng-app="myApp">
	
		<nav class="navbar navbar-inverse navbar-fixed-top">
  			<div class="container-fluid">
    			<div class="navbar-header">
			      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
      			  <a class="navbar-brand" href="#/">RESOURCE MANAGEMENT</a>
   			   </div>
			    <div class="collapse navbar-collapse" id="myNavbar">
				      <ul class="nav navbar-nav" ng-controller="LoginController as lctrl">
				        <li class="active"><a href="#/ptalloc">Home</a></li>
				        <li><a href="#/teams">Teams</a></li>
				        <li ng-show="{{lctrl.permission}}"><a href="#/admin">Resources</a></li>
				      </ul>
				      <ul class="nav navbar-nav navbar-right">
				        <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
				      </ul>
			   </div>
  			</div>
		</nav>
		
		<div class="container-fluid" style="padding-top: 200px">
				<ng-view></ng-view>  
		</div>
		
	
<script src="<c:url value="/resources/theme1/js/app/app.js"/>"></script>
<script src="<c:url value="/resources/theme1/js/controller/login_controller.js" />"></script>
<script src="<c:url value="/resources/theme1/js/service/login_service.js" />"></script>
<script src="<c:url value='/resources/theme1/js/controller/team_controller.js' />"></script>
<script src="<c:url value='/resources/theme1/js/service/team_service.js' />"></script>
<script src="<c:url value='/resources/theme1/js/controller/project_controller.js' />"></script>
<script src="<c:url value='/resources/theme1/js/service/project_service.js' />"></script>
<script src="<c:url value='/resources/theme1/js/service/resource_service.js' />"></script>
<script src="<c:url value='/resources/theme1/js/controller/resource_controller.js' />"></script>
	
	
	
</body>
</html>