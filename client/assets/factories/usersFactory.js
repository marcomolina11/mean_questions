app.factory('usersFactory', ['$http', function($http){

	var UsersFactory = function(){
		var _this = this; 

		this.login = function(data, callback){
			$http.post('/login', data).then(function(returned_data){
				if (returned_data.data.errors){
					console.log(returned_data.data.errors);
				}
				if (typeof(callback) == 'function'){
					callback(returned_data);
				}
			});
		}
	}
	console.log(new UsersFactory());
	return new UsersFactory;
}]);