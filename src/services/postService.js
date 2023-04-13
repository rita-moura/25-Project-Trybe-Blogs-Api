const categoryService = require('./categoryService');
const { BlogPost, User, Category } = require('../models');

const create = async ({ title, content, categoryIds }) => {
  const categories = await categoryService.getAll();
  console.log(categories);

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