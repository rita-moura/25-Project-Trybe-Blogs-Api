const { validateToken } = require('../utils/auth');

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    validateToken(authorization);
  
    return next();
  } catch (error) {
    const classError = new Error('Expired or invalid token');
    classError.status = 401;
    throw classError;
  }
};

module.exports = {
  authToken,
};