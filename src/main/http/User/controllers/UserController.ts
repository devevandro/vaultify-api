import * as yup from 'yup';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../../../guards/ApiKeyGuard';
import { Request } from 'express';
import { HttpRouterDecoratorFactory } from '../../../factories/decorators/HttpRouterDecoratorFactory';
import { UserFactory } from '../../../factories/user/UserFactory';

@Controller('user')
@UseGuards(ApiKeyGuard)
export class UserController {
  @Get('')
  async getUserById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        user: yup.string().required(),
      },
      async data => new UserFactory().execute(data),
    ).execute();
  }
}
