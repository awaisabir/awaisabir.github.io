var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'mainController'
	})
	.when('/home',{
		templateUrl: 'templates/home.html',
		controller: 'mainController'
	})

	.when('/intro', {
		templateUrl: 'templates/intro.html',
		controller: 'mainController'
	})

	.when('/projects', {
		templateUrl: 'templates/projects.html',
		contoller: 'mainController'
	})
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'mainController'
	});
	
});

myApp.controller('mainController', function($scope) {


});
