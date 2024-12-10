import { Request } from 'express';
import * as yup from 'yup';

import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';

import { CreateFavoriteFactory } from '../../factories/favorite/CreateFavoriteFactory';
import { DeleteFavoriteByIdFactory } from '../../factories/favorite/DeleteFavoriteByIdFactory';
import { GetFavoriteByIdFactory } from '../../factories/favorite/GetFavoriteByIdFactory';
import { GetFavoritesFactory } from '../../factories/favorite/GetFavoritesFactory';
import { UpdateFavoriteByIdFactory } from '../../factories/favorite/UpdateFavoriteByIdFactory';
import { HttpRouterDecoratorFactory } from '../../factories/decorators/HttpRouterDecoratorFactory';

@Controller('/favorites')
export class FavoriteController {
  @Get('')
  async getFavorites(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
      },
      async data => new GetFavoritesFactory().execute(data.userId),
    ).execute();
  }

  @Get('/:id')
  async getFavoritesById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        favoriteId: yup.string().required(),
      },
      async data => new GetFavoriteByIdFactory().execute(data),
    ).execute();
  }

  @Post('')
  async createFavoriteById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        url: yup.string().required(),
      },
      async data => new CreateFavoriteFactory().execute(data),
    ).execute();
  }

  @Put('/:id')
  async updateFavoriteById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        id: yup.string().required(),
      },
      async data => new UpdateFavoriteByIdFactory().execute(data),
    ).execute();
  }

  @Delete('/:id')
  async deleteFavoriteById(@Req() request: Request) {
    return new HttpRouterDecoratorFactory(
      request,
      {
        userId: yup.string().required(),
        favoriteId: yup.string().required(),
      },
      async data =>
        new DeleteFavoriteByIdFactory().execute({
          userId: data.userId,
          favoriteId: data.FavoriteId,
        }),
    ).execute();
  }
}
