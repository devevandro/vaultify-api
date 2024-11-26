import { Request } from 'express';
import * as yup from 'yup';

import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';

import { CreateCommandFactory } from '../../factories/command/CreateCommandFactory';
import { DeleteCommandByIdFactory } from '../../factories/command/DeleteCommandByIdFactory';
import { GetCommandByIdFactory } from '../../factories/command/GetCommandByIdFactory';
import { GetCommandsFactory } from '../../factories/command/GetCommandsFactory';
import { UpdateCommandByIdFactory } from '../../factories/command/UpdateCommandByIdFactory';
import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';

@Controller('/commands')
export class CommandController {
  @Get('')
  async getCommands(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new GetCommandsFactory().execute(data.userId),
    ).execute();
  }

  @Get('/:id')
  async getCommandsById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        commandId: yup.string().required(),
      },
      async data => new GetCommandByIdFactory().execute(data),
    ).execute();
  }

  @Post('')
  async createCommandById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        command: yup.string().required(),
        tag: yup.string().required(),
        title: yup.string().required(),
      },
      async data => new CreateCommandFactory().execute(data),
    ).execute();
  }

  @Put('/:id')
  async updateCommandById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        command: yup.string().required(),
        id: yup.string().required(),
      },
      async data => new UpdateCommandByIdFactory().execute(data),
    ).execute();
  }

  @Delete('/:id')
  async deleteCommandById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        commandId: yup.string().required(),
      },
      async data =>
        new DeleteCommandByIdFactory().execute({
          userId: data.userId,
          commandId: data.commandId,
        }),
    ).execute();
  }
}
