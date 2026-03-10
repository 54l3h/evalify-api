import { Inject, Injectable } from '@nestjs/common';
import { HashingProvider } from 'src/modules/auth/providers/hashing.provider';
import * as bcrypt from 'bcrypt';
import appConfig from 'src/config/app.config';
import type { ConfigType } from '@nestjs/config';

@Injectable()
export class BcryptProvider implements HashingProvider {
  constructor(private readonly bcryptCfg: ConfigType<typeof appConfig>['bcrypt']) {}

  public async hash(data: string | Buffer): Promise<string> {
    return await bcrypt.hash(data, this.bcryptCfg.saltRounds);
  }

  async compare(data: string | Buffer, hash: string): Promise<boolean> {
    return await bcrypt.compare(data, hash);
  }
}
