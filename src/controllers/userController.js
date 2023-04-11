const { userService } = require('../services');

const create = async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await userService.create(user);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};