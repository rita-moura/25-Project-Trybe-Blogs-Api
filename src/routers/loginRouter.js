const express = require('express');
const { loginController } = require('../controllers');

const router = express.Router();

router.post('/', loginController.authenticate);

module.exports = {
  router,
};
