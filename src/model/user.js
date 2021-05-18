const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    age:Number,
    school:String,
},{collection : "user"});
var UserModel = mongoose.model('user',UserSchema)

module.exports = UserModel;