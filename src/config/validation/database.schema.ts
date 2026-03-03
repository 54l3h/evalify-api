import Joi from 'joi';

export const databaseSchema = {
  DB_TYPE: Joi.string().valid('postgres').default('postgres'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().integer().default(5431),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
};
