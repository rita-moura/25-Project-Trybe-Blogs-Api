const { Category } = require('../models');
const statusError = require('../utils/statusError');
const { validetionCategory } = require('./schemas/userSchema');

const create = async (name) => {
  const { error } = validetionCategory(name);
  
  if (error) throw statusError(400, error.message);
  
  const newCategory = await Category.create({ name });
  console.log('=====>', newCategory);

  return newCategory;
};

module.exports = {
  create,
};