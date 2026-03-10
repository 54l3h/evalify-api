import Joi from 'joi';

export const appSchema = {
  PORT: Joi.number().integer().default(3000),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  HASH_STRATEGY: Joi.string().valid('argon2', 'bcrypt').default('argon2'),
  SALT_ROUNDS: Joi.number().integer().default(12),
  ARGON2_TYPE: Joi.number().valid(0, 1, 2).default(2),
  ARGON2_MEMORY_COST: Joi.number().default(65536),
  ARGON2_TIME_COST: Joi.number().default(3),
  ARGON2_PARALLELISM: Joi.number().default(4),
};
