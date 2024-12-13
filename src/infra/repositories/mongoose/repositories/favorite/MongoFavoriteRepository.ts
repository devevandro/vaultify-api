import { connection, mongo } from 'mongoose';

import * as GetFavoriteByIdData from '../../../../../domain/data/favorite/IGetFavoriteByIdData';
import * as GetFavoritesData from '../../../../../domain/data/favorite/IGetFavoritesData';
import * as CreateFavoriteData from '../../../../../domain/data/favorite/ICreateFavoriteData';
import * as UpdateFavoriteData from '../../../../../domain/data/favorite/IUpdateFavoriteData';
import * as DeleteFavoriteByIdData from '../../../../../domain/data/favorite/IDeleteFavoriteByIdData';
import {
  IFavoriteSchema,
  FavoriteSchema,
} from '../../models/favorite/FavoriteModel';
import { FavoriteMapper } from '../../mappers/favorite/FavoriteMapper';

export class MongoFavoriteRepository
  implements
    GetFavoritesData.IGetFavoritesData,
    GetFavoriteByIdData.IGetFavoriteByIdData,
    CreateFavoriteData.ICreateFavoriteData,
    DeleteFavoriteByIdData.IDeleteFavoriteByIdData,
    UpdateFavoriteData.IUpdateFavoriteData
{
  private FavoriteModel = connection.model<IFavoriteSchema>(
    'Favorites',
    FavoriteSchema,
  );

  async getFavorites(
    userId: GetFavoritesData.Params,
  ): Promise<GetFavoritesData.Result> {
    const userMongoId = new mongo.ObjectId(userId);
    const Favorites = await this.FavoriteModel.find({ userId: userMongoId });

    return Favorites.length > 0
      ? Favorites.map(Favorite => FavoriteMapper.toEntity(Favorite))
      : null;
  }

  async getFavoriteById({
    userId,
    favoriteId,
  }: GetFavoriteByIdData.Params): Promise<GetFavoriteByIdData.Result> {
    const FavoriteById = await this.FavoriteModel.findOne({
      userId,
      favoriteId,
    });

    return FavoriteById ? FavoriteMapper.toEntity(FavoriteById) : null;
  }

  async createFavorite(
    params: CreateFavoriteData.Params,
  ): Promise<CreateFavoriteData.Result> {
    const FavoriteCreated = await this.FavoriteModel.create(params);
    return FavoriteCreated ? FavoriteMapper.toEntity(FavoriteCreated) : null;
  }

  async deleteFavoriteById({
    userId,
    favoriteId,
  }: DeleteFavoriteByIdData.Params): Promise<DeleteFavoriteByIdData.Result> {
    await this.FavoriteModel.deleteOne({ _id: userId, favoriteId });
    return true;
  }

  async updateFavorite(
    params: UpdateFavoriteData.Params,
  ): Promise<UpdateFavoriteData.Result> {
    const FavoriteUpdated = await this.FavoriteModel.updateOne(
      { userId: params?.userId, Favorite: params.id },
      params,
    );
    return !!FavoriteUpdated;
  }
}
