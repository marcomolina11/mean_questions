console.log('Answer model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating Schema
var AnswerSchema = new mongoose.Schema({
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  answer: {
  	type: String,
  	required: [true, "Answer is required"],
    minlength: [5, "Password must be at least 5 characters long"],
  },
  details: String,
  user: String,
  likes: {
	type: Number,
	default: 0,
  },
}, {timestamps: true});

AnswerSchema.methods.like = function(callback){
	this.likes += 1;
	this.save(function(err){
		callback(err);
	});
};

// Register Schema as a model
var Answer = mongoose.model('Answer', AnswerSchema);