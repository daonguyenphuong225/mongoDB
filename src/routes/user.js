const express = require('express');
const router = express.Router();
const userController = require('../controller/user')

router.post('/create',userController.createUser)
router.get('/get',userController.getUser)
router.delete('/delete/:id',userController.deleteUser)
router.get('/pagination',userController.pagination)

module.exports = router
