const PostModel = require('../model/post');

exports.createPost = function (req,res){
    PostModel.create(req.body)
    
    .then((data)=>{
       res.json(data);
    })
    .catch((err)=>{
        res.json(err);
    })
}
exports.getPost = function(req,res){
    PostModel.find()
    .then((data)=>{
        res.json(data);
     })
     .catch((err)=>{
         res.json(err);
     })
}
exports.getPostId = function(req,res){
    let id = req.params.id
    PostModel.findById(id)
    .then((data)=>{
        res.json(data);
     })
     .catch((err)=>{
         res.json(err);
     })
}

exports.update = function(req,res){
    let id = req.params.id
    PostModel.updateOne({_id:id},{content: req.body.content})
    .then((data)=>{
        res.json(data);
     })
     .catch((err)=>{
         res.json(err);
     })
}

