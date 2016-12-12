app.controller('IndexQuestionCtrl', ['$scope', '$cookies', '$location', 'questionsFactory', function($scope, $cookies, $location, questionsFactory){
	$scope.questions = [];
	$scope.user = $cookies.get('currentUser');

	var index = function(){
		questionsFactory.index(function(returnedData){
			$scope.questions = returnedData;
		});
	};
	index();

	$scope.logout = function(){
		$cookies.remove('currentUser');
		$location.url('/index');
	}

}])