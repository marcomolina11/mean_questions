app.controller('ShowQuestionCtrl', ['$scope', '$location', '$cookies', 'questionsFactory', '$routeParams', function($scope, $location, $cookies, questionsFactory, $routeParams){
  $scope.question = {};
  $scope.answers = [];
  questionsFactory.getQuestion($routeParams.id, function(returnedData){
  	console.log( 'controller', returnedData);
    $scope.question = returnedData;
    $scope.answers = returnedData.answers;
  });

 $scope.likeAnswer = function(id){
 	    questionsFactory.likeAnswer(id, function(returnedData){
 	    	console.log(returnedData);
 	    });
 	    questionsFactory.show($routeParams.id, function(returnedData){
    		$scope.question = returnedData;
    		$scope.answers = returnedData.answers;
  		});
 	};
  $scope.logout = function(){
		$cookies.remove('currentUser');
		$location.url('/index');
	}
}]);