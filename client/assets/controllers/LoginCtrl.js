app.controller('LoginCtrl', ['$scope', '$cookies', '$location', 'usersFactory', function($scope, $cookies, $location, usersFactory){
	$scope.userLogin = {};
	$scope.errors = {};
	$scope.user = $cookies.get('currentUser');

	$scope.login = function(){
		$scope.errors = {};
		if($scope.userLogin.name.length < 2){
			$scope.errors = { name: {message: "Name must be at least 2 characters long"}};
		}
		else{
			usersFactory.login($scope.userLogin, function(returnedData){
				if(returnedData.data.errors){
					$scope.errors = returnedData.data.errors;
				}
				else{
					console.log(returnedData.data.name);
					var user = returnedData.data.name;
					$cookies.put('currentUser', user);
					$location.url('/questions');
				}
			});
			$scope.userLogin = {};
		}
	}
	$scope.logout = function(){
		$cookies.remove('currentUser');
	}
}])