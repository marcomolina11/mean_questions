app.controller('NewQuestionCtrl', ['$scope', '$location', '$cookies','questionsFactory', function($scope, $location, $cookies, questionsFactory){
	$scope.errors = {};
	$scope.create = function(){
		$scope.errors = {};
		if($scope.newQuestion.question.length < 10){
			$scope.errors = { question: {message: "Question must be at least 10 characters long"}};
		}
		else{
			questionsFactory.create($scope.newQuestion, function(returnedData){
				// console.log("Data on controller:", returnedData);
				$scope.newQuestion = {};
				$location.url('/questions');
			});
		}
	};
	$scope.logout = function(){
		$cookies.remove('currentUser');
		$location.url('/index');
	}

}]);