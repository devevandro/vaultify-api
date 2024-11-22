import { Request } from 'express';
import * as yup from 'yup';

import { Controller, Get, Req } from '@nestjs/common';

import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';
import { GetUserByEmailFactory } from '../../factories/user/GetUserByEmailFactory';

@Controller('/user')
export class UserController {
  @Get('/user-by-email')
  async getUserByEmail(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        email: yup.string().required(),
      },
      async data => new GetUserByEmailFactory().execute(data.email),
    ).execute();
  }
}
