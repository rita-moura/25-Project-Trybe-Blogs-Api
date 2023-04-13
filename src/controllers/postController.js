const { postService } = require('../services');

const create = async (req, res, next) => {
  try {
    const post = req.body;
    const newPost = await postService.create(post);
    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};