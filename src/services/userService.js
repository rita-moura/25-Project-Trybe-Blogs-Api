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

const getAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) throw statusError(404, 'User does not exist');

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};