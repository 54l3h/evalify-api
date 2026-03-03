import Joi from 'joi';

export const appSchema = {
  PORT: Joi.number().integer().default(3000),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
};
