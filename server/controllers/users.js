// load User model
var mongoose = require('mongoose');
//Registering Schema as a model
var User = mongoose.model('User');

// Build out the methods in the UsersControllers below
function UsersController(){
  var _this = this;

  this.create = function(req,res){
    User.create(req.body, function(err, result){
      if (err){ console.log(err); }
      res.json(result);
    })
  };
  this.login = function(req,res){
    User.find({ name: req.body.name }, function(err, result){
      if (result.length == 0) { 
        _this.create(req, res); 
      }
      else{
        console.log(result);
        res.json(result[0]);
      }

    });
  };
}
module.exports = new UsersController();