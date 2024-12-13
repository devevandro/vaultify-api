import { Request } from 'express';
import * as yup from 'yup';

import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';

import { CreateSecretFactory } from '../../factories/secret/CreateSecretFactory';
import { DeleteSecretByIdFactory } from '../../factories/secret/DeleteSecretByIdFactory';
import { GetSecretByIdFactory } from '../../factories/secret/GetSecretByIdFactory';
import { GetSecretsFactory } from '../../factories/secret/GetSecretsFactory';
import { UpdateSecretByIdFactory } from '../../factories/secret/UpdateSecretByIdFactory';
import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';

@Controller('/secrets')
export class SecretController {
  @Get('')
  async getSecrets(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new GetSecretsFactory().execute(data.userId),
    ).execute();
  }

  @Get('/:id')
  async getSecretsById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        secretId: yup.string().required(),
      },
      async data => new GetSecretByIdFactory().execute(data),
    ).execute();
  }

  @Post('')
  async createSecretById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        value: yup.string().required(),
      },
      async data => new CreateSecretFactory().execute(data),
    ).execute();
  }

  @Put('/:id')
  async updateSecretById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        secretId: yup.string().required(),
      },
      async data => new UpdateSecretByIdFactory().execute(data),
    ).execute();
  }

  @Delete('/:id')
  async deleteSecretById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        secretId: yup.string().required(),
      },
      async data =>
        new DeleteSecretByIdFactory().execute({
          userId: data.userId,
          secretId: data.secretId,
        }),
    ).execute();
  }
}
