console.log('Questions controller');
// load Question model
var mongoose = require('mongoose');
//Registering Schema as a model
var Question = mongoose.model('Question');

function QuestionsController(){
  var _this = this;

  this.index = function(req,res){
    Question.find({})
    .populate('answers')
    .exec(function(err, result){
      if (err){ console.log(err); }
      console.log(result)
      res.json(result);
    }) 
  };
  this.create = function(req,res){
    console.log(req.body);
    Question.create(req.body, function(err, result){
      if (err){ console.log(err); }
      res.json(result);
    })
  };
  this.show = function(req,res){
    Question.findOne({ _id: req.params.id})
    .populate('answers')
    .exec(function(err, result){
      if (err){ console.log(err); }
      console.log(result)
      res.json(result);
    }) 
  };
}
module.exports = new QuestionsController();