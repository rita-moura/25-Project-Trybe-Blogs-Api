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

module.exports = {
  create,
};