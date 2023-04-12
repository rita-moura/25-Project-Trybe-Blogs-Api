const { categoryService } = require('../services');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log('namecontroller', name);
    const newCategory = await categoryService.create(name);
    return res.status(201).json(newCategory);
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  getAll,
};