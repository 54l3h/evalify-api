import Joi from 'joi';
import { appSchema } from 'src/config/validation/app.schema';
import { databaseSchema } from 'src/config/validation/database.schema';

export const envValidationSchema = Joi.object({
  ...appSchema,
  ...databaseSchema,
});
