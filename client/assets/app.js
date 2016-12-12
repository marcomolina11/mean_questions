var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/index', {
		templateUrl: 'partials/main.html',
		controller: 'LoginCtrl'
	})
	.when('/questions', {
		templateUrl: 'partials/indexQuestion.html',
		controller: 'IndexQuestionCtrl'
	})
	.when('/questions/new', {
		templateUrl: 'partials/newQuestion.html',
		controller: 'NewQuestionCtrl'
	})
	.when('/questions/:id/new_answer', {
		templateUrl: 'partials/answerQuestion.html',
		controller: 'AnswerQuestionCtrl'
	})
	.when('/questions/:id', {
		templateUrl: 'partials/showQuestion.html',
		controller: 'ShowQuestionCtrl'
	})
	.otherwise({
		redirectTo: '/index'
	})
});