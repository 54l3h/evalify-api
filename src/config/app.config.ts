import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  PORT: parseInt(process.env.PORT ?? '3000'),
  nodeEnv: process.env.NODE_ENV,
}));
