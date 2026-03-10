import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  port: parseInt(process.env.PORT ?? '3000', 10),
  nodeEnv: process.env.NODE_ENV,
  hashStrategy: process.env.HASH_STRATEGY,
  bcrypt: { saltRounds: parseInt(process.env.SALT_ROUNDS ?? '12', 10) },
  argon2: {
    type: parseInt(process.env.ARGON2_TYPE ?? '2', 10) as 0 | 1 | 2,
    memoryCost: parseInt(process.env.ARGON2_MEMORY_COST ?? '65536', 10),
    timeCost: parseInt(process.env.ARGON2_TIME_COST ?? '3', 10),
    parallelism: parseInt(process.env.ARGON2_PARALLELISM ?? '4', 10),
  },
}));
