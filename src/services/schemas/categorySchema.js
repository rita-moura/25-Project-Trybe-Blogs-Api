const Joi = require('joi');

const nameSchema = Joi.string().min(2).required().label('name');

const validetionCategory = (name) => nameSchema.validate(name);

module.exports = {
  validetionCategory,
};