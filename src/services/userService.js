const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const statusError = require('../utils/statusError');
const { validetionUser } = require('./schemas/userSchema');

const create = async (user) => {
  const { error } = validetionUser(user);
  
  if (error) throw statusError(400, error.message);

  const { email } = user;
  const verifyEmail = await User.findOne({
    where: { email },
  });
  
  if (verifyEmail !== null) throw statusError(409, 'User already registered');

  const newUser = await User.create(user);

  const token = generateToken(newUser.dataValues);

  return { token };
};

module.exports = {
  create,
};