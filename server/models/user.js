console.log('User model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	}, 
}, {timestamps: true});


// Register Schema as a model
var User = mongoose.model('User', UserSchema);