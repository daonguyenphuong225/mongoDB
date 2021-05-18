const UserModel = require('../model/user');

exports.createUser = function (req, res) {
    UserModel.create(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
}

exports.getUser = function (req, res) {
    UserModel.find({
        username: req.body.username,
        password: req.body.password
    })
        .then((data) => {
            if (data.length == 0) {
                res.json('Không tìm thấy dữ liệu')
            } else {
                res.json(data)
            }
        })
        .catch((err) => {
            res.json(err);
        })
}

exports.deleteUser = function (req, res) {
    UserModel.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
}

exports.pagination = function (req, res) {
    UserModel.find()
    .limit(3)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    })
}