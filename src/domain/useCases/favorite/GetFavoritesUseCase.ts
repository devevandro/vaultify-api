import IUseCase from '../../../core/IUseCase';
import { IGetFavoritesData } from '../../data/favorite/IGetFavoritesData';
import { FavoriteEntity } from '../../entities/favorite/FavoriteEntity';
import { FavoriteError } from '../../errors/favorite/FavoriteError';

export type ResponseDTO = FavoriteEntity[];

export class GetFavoritesUseCase implements IUseCase<string, ResponseDTO> {
  constructor(
    private readonly dependencies: { getFavoritesData: IGetFavoritesData },
  ) {}

  async execute(userId: string): Promise<ResponseDTO> {
    const { getFavoritesData } = this.dependencies;
    const Favorites = await getFavoritesData.getFavorites(userId);

    if (!Favorites) {
      throw new FavoriteError({ message: 'FavoritesNotFound' });
    }

    return Favorites;
  }
}
