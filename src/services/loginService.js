const { User } = require('../models');
const { generateToken } = require('../utils/auth');
const statusError = require('../utils/statusError');

const authenticate = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) { throw statusError(400, 'Invalid fields'); }

  const token = generateToken(user.dataValues);

  return { token };
};

module.exports = {
  authenticate,
};