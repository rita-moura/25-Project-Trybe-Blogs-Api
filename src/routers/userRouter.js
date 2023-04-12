const express = require('express');
const { userController } = require('../controllers');
const { authToken } = require('../middlewares/authToken');

const userRouter = express.Router();

userRouter.post('/', userController.create);

userRouter.get('/', authToken, userController.getAll);

userRouter.get('/:id', authToken, userController.getById);

module.exports = userRouter;