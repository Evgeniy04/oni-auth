import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { AccountModule } from '../../internal/account/account.module.js';

@Module({
  imports: [
    AccountModule,
    JwtModule,
  ],
  controllers: [
    AuthController,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule {}