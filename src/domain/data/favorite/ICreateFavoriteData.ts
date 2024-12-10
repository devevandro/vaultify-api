import { FavoriteEntity } from '../../entities/favorite/FavoriteEntity';

export type Params = {
  userId: string;
  url: string;
  name?: string;
  description?: string;
};

export type Result = FavoriteEntity;

export interface ICreateFavoriteData {
  createFavorite(params: Params): Promise<Result>;
}
