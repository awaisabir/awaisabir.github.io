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
	})
	.when('/c', {
		templateUrl: 'templates/c.html',
		controller: 'mainController'
	})
	.when('/cplusplus', {
		templateUrl: 'templates/cplusplus.html',
		controller: 'mainController'
	})
	.when('/processing', {
		templateUrl: 'templates/processing.html',
		controller: 'mainController'
	})
	.when('/meanstack', {
		templateUrl: 'templates/meanstack.html',
		controller: 'mainController'
	});

});

myApp.controller('mainController', function($scope) {


});
