app.factory('questionsFactory', ['$http', function($http){
	var questions = [];
	var question = {};

	function QuestionsFactory(){
		var _this = this;

    _this.index = function(callback){
      $http.get('/questions').then(function(returned_data){
        // console.log("Data on Factory:", returned_data);
        console.log("running index method");
        questions = returned_data.data;
        if (typeof(callback) == 'function'){
          callback(questions);
        }
      });
    };
		_this.create = function(newQuestion, callback){
			$http.post('/questions', newQuestion).then(function(returned_data){
				// console.log("Data on Factory:", returned_data);
				if (typeof(callback) == 'function'){
					callback(returned_data);
				}
			});
		};
		_this.answer = function(answer, question, callback){ 
      		$http.post(`/answers/${question._id}`, answer).then(function(returned_data){
            if(typeof (callback) == 'function'){
              callback(returned_data.data);
            }
          })
    };
    _this.delete = function(id, callback){
        	$http.delete(`/questions/${id}`).then(function(returned_data){
            if (returned_data){
              questions = returned_data.data;
              if (typeof(callback) == 'function'){
                callback(returned_data.data);
              }
            }
          })
    };
    _this.show = function(id, callback){
      $http.get(`/questions/${id}`).then(function(returned_data){
        console.log("Data on Factory:", returned_data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    _this.likeAnswer = function(id, callback){
          $http.post(`/answers/${id}/like`).then(function(returned_data){
            if(typeof (callback) == 'function'){
              callback(returned_data.data);
            }
          })
    }
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    _this.getQuestions = function(callback){
      callback(questions);
    };
    _this.getQuestion = function(id, callback){
      // console.log("running getquestionMethod", questions);
      if (questions.length == 0){
        _this.show(id, function(returned_data){
          question = returned_data;
          callback(question);
        })
      }
      else{
        for (var i=0; i<questions.length; i++){
          if (questions[i]._id == id){
            question = questions[i];
            callback(question);
          }
        }
      }
    };
  }
	console.log(new QuestionsFactory());
	return new QuestionsFactory();
}]);

