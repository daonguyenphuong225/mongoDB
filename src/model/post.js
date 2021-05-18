const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    content:String,
    title:String,
    comment:String,
},{collection : "post"});
var PostModel = mongoose.model('post',PostSchema)

module.exports = PostModel;