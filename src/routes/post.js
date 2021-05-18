const express = require('express');
const router = express.Router();
const postController = require('../controller/post')

router.post('/create',postController.createPost)
router.get('/get',postController.getPost)
router.get('/get/:id',postController.getPostId)
router.put('/update/:id',postController.update)

module.exports = router
