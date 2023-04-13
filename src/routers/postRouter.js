const express = require('express');
const { postController } = require('../controllers');
const { isValidPost } = require('../middlewares/verifyPost');

const postRouter = express.Router();

postRouter.post('/', isValidPost, postController.create);
postRouter.get('/', postController.getAll);

module.exports = postRouter;