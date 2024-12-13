import { Request } from 'express';
import * as yup from 'yup';

import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';

import { CreatePasswordFactory } from '../../factories/password/CreatePasswordFactory';
import { DeletePasswordByIdFactory } from '../../factories/password/DeletePasswordByIdFactory';
import { GetPasswordByIdFactory } from '../../factories/password/GetPasswordByIdFactory';
import { GetPasswordsFactory } from '../../factories/password/GetPasswordsFactory';
import { UpdatePasswordByIdFactory } from '../../factories/password/UpdatePasswordByIdFactory';
import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';

@Controller('/passwords')
export class PasswordController {
  @Get('')
  async getPasswords(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new GetPasswordsFactory().execute(data.userId),
    ).execute();
  }

  @Get('/:id')
  async getPasswordsById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        passwordId: yup.string().required(),
      },
      async data => new GetPasswordByIdFactory().execute(data),
    ).execute();
  }

  @Post('')
  async createPasswordById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new CreatePasswordFactory().execute(data),
    ).execute();
  }

  @Put('/:id')
  async updatePasswordById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        id: yup.string().required(),
      },
      async data => new UpdatePasswordByIdFactory().execute(data),
    ).execute();
  }

  @Delete('/:id')
  async deletePasswordById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        PasswordId: yup.string().required(),
      },
      async data =>
        new DeletePasswordByIdFactory().execute({
          userId: data.userId,
          passwordId: data.PasswordId,
        }),
    ).execute();
  }
}
