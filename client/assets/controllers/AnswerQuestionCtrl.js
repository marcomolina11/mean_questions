app.controller('AnswerQuestionCtrl', ['$scope', '$location', '$cookies','questionsFactory', '$routeParams', function($scope, $location, $cookies, questionsFactory, $routeParams){
	$scope.question = {};
	$scope.errors = {};

	questionsFactory.getQuestion($routeParams.id, function(returnedData){
	  	console.log(returnedData);
	    $scope.question = returnedData;
  	});

	$scope.answer = function(){
		$scope.errors = {};
		if($scope.newAnswer.answer.length < 5){
			$scope.errors = { answer: {message: "Answer must be at least 5 characters long"}};
		}
		else{
			$scope.newAnswer.user = $cookies.get('currentUser');
			questionsFactory.answer($scope.newAnswer, $scope.question, function(returnedData){
				// console.log("Data on controller:", returnedData);
				$scope.newAnswer = {};
				$location.url('/questions');
			});
		}
	};
	$scope.logout = function(){
		$cookies.remove('currentUser');
		$location.url('/index');
	}

}]);