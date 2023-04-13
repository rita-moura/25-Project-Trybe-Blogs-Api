const isValidPost = (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) {
      return res.status(400).json({
      message: 'Some required fields are missing',
      });
    }
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isValidPost,
};