import { HashingProvider } from 'src/modules/auth/providers/hashing.provider';
import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import appConfig from 'src/config/app.config';

@Injectable()
export class Argon2Provider implements HashingProvider {
  constructor(
    private readonly argonCfg: ConfigType<typeof appConfig>['argon2'],
  ) {}
  public async hash(data: string | Buffer): Promise<string> {
    return await argon2.hash(data, {
      type: this.argonCfg.type,
      memoryCost: this.argonCfg.memoryCost,
      timeCost: this.argonCfg.timeCost,
      parallelism: this.argonCfg.parallelism,
    });
  }

  public async compare(data: string | Buffer, hash: string): Promise<boolean> {
    return await argon2.verify(hash, data);
  }
}
