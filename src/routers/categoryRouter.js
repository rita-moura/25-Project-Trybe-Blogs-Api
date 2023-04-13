const express = require('express');
const { categoryController } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post('/', categoryController.create);
loginRouter.get('/', categoryController.getAll);

module.exports = loginRouter;