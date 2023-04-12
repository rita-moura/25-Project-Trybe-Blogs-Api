const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.string().min(2).label('image'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  'string.email': '{{#label}} must be a valid email',
});

const validetionUser = (user) => userSchema.validate(user);

const nameSchema = Joi.string().min(2).required().label('name');

const validetionCategory = (name) => nameSchema.validate(name);

module.exports = {
  validetionUser,
  validetionCategory, 
};