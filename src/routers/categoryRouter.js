const express = require('express');
const { categoryController } = require('../controllers');
const { authToken } = require('../middlewares/authToken');

const loginRouter = express.Router();

loginRouter.post('/', authToken, categoryController.create);

module.exports = loginRouter;