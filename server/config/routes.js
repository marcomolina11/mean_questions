console.log('routes');
var mongoose = require('mongoose');
//Registering Schema as a model
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
//require controller files
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');

module.exports = function(app){
  app.post('/login', users.login);
  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  app.post('/questions', questions.create);
  app.post('/answers/:id', answers.create);
  app.post('/answers/:id/like', answers.like);
}