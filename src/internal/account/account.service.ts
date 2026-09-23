import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import {
  VerificationParams,
  GetUsersByFiltersParam,
  GetUsersResponse,
} from './account.types.js';

@Injectable()
export class InternalAccountService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async verification(params: VerificationParams): Promise<boolean> {
    const url = `${this.config.get('ACCOUNT_URL')}/api/account/user/verification`;

    const res = await this.httpService.axiosRef.get(url, {
      params,
    });

    return res.data;
  }

  async GetUsersByFilter(
    params: GetUsersByFiltersParam,
  ): Promise<GetUsersResponse> {
    const url = `${this.config.get('ACCOUNT_URL')}` + `/api/account/user`;
    const res = await this.httpService.axiosRef.get(url, {
      params,
      paramsSerializer: {
        indexes: null,
      },
    });

    return res.data;
  }
}
