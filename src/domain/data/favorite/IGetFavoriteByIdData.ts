import { FavoriteEntity } from '../../entities/favorite/FavoriteEntity';

export type Params = {
  userId: string;
  favoriteId: string;
};

export type Result = FavoriteEntity;

export interface IGetFavoriteByIdData {
  getFavoriteById(params: Params): Promise<Result>;
}
