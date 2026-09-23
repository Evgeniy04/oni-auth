import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { InternalAccountModule } from '../../internal/account/account.module.js';
import { RedisModule } from '../../config/redis/redis.module.js';

@Module({
  imports: [
    InternalAccountModule,
    JwtModule,
    RedisModule
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {}