import * as yup from 'yup';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';
import { UserFactory } from '../../factories/user/UserFactory';

@Controller('/users')
export class UserController {
  @Get('')
  async getUserById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new UserFactory().execute({ userId: data.userId }),
    ).execute();
  }
}
