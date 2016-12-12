console.log('Answers controller');
// load Answer model
var mongoose = require('mongoose');
//Registering Schema as a model
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

function AnswersController(){
  var _this = this;

  this.create = function(req,res){
    console.log(req.body);
    Question.findOne({_id: req.params.id}, function(err, question){
        var answer = new Answer(req.body);
        answer._question = question._id;
        // now save both to the DB
        answer.save(function(err){
          question.answers.push(answer);
          question.save(function(err, result){
              if(err) {
               console.log(err);
              } 
              else{
                res.json(result);
              }
          });
         });
    });
  };
  this.like = function(req, res){
    Answer.findById(req.params.id, function(err, answer){
      answer.like(function(err){
        if (err){ return res.json(err); }
        return res.json(true);
      })
    })
  }
}
module.exports = new AnswersController();