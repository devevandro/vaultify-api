import { Request } from 'express';
import * as yup from 'yup';

import { Controller, Get, Delete, Req } from '@nestjs/common';

import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';
import { GetUserByEmailFactory } from '../../factories/user/GetUserByEmailFactory';
import { DeleteUserByIdFactory } from '../../factories/user/DeleteUserByIdFactory';

@Controller('/users')
export class UserController {
  @Get('')
  async getUserByEmail(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        email: yup.string().required(),
      },
      async data => new GetUserByEmailFactory().execute(data.email),
    ).execute();
  }

  @Delete('/:id')
  async deleteUserById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new DeleteUserByIdFactory().execute(data.userId),
    ).execute();
  }
}
