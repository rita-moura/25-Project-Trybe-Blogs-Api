const categoryService = require('./categoryService');
const { BlogPost, User, Category } = require('../models');
const statusError = require('../utils/statusError');

const create = async ({ title, content, categoryIds }) => {
  const categories = await categoryService.getAll();

  const categoryId = categories.map((category) => category.id);
  const postIncludeId = categoryIds.every((ids) => categoryId.includes(ids));

  if (!postIncludeId) throw statusError(400, 'one or more "categoryIds" not found');
  
  const newPost = await BlogPost.create({ title, content, categoryIds });

  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { 
        model: User, 
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });

  return posts;
};

module.exports = {
  create,
  getAll,
};