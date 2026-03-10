import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/modules/users/users.module';
import { HashingProvider } from 'src/modules/auth/providers/hashing.provider';
import { BcryptProvider } from 'src/modules/auth/providers/bcrypt.provider';
import { Argon2Provider } from 'src/modules/auth/providers/argon2.provider';
import appConfig from 'src/config/app.config';
import { ConfigType } from '@nestjs/config';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      inject: [appConfig.KEY],
      useFactory: (appCfg: ConfigType<typeof appConfig>) => {
        return appCfg.hashStrategy === 'argon2'
          ? new Argon2Provider(appCfg.argon2)
          : new BcryptProvider(appCfg.bcrypt);
      },
    },
  ],
  exports: [AuthService, HashingProvider],
  imports: [UsersModule],
})
export class AuthModule {}
