const express = require('express');
const { loginController } = require('../controllers');
const { isValidLogin } = require('../middlewares/verifyLogin');

const loginRouter = express.Router();

loginRouter.post('/', isValidLogin, loginController.authenticate);

module.exports = loginRouter;
