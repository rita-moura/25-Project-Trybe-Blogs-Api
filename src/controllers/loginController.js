const { loginService } = require('../services');

const authenticate = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.authenticate(email, password);
    return res.status(200).json(login);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authenticate,
};