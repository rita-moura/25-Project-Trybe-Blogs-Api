const express = require('express');
const { userController } = require('../controllers');
const { authToken } = require('../middlewares/authToken');

const userRouter = express.Router();

userRouter.post('/', userController.create);

userRouter.get('/', authToken, userController.getAll);

module.exports = userRouter;