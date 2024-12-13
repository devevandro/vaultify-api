import { FavoriteEntity } from '../../entities/favorite/FavoriteEntity';

export type Params = string;
export type Result = FavoriteEntity[];

export interface IGetFavoritesData {
  getFavorites(userId: Params): Promise<Result>;
}
