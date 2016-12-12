console.log('Question model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating Schema
var QuestionSchema = new mongoose.Schema({
  question: {
  	type: String,
  	required: [true, "Question is required"],
    minlength: [10, "Password must be at least 10 characters long"],
  },
  description: String,
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

// Register Schema as a model
var Question = mongoose.model('Question', QuestionSchema);