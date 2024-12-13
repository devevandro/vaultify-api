import { GetFavoritesUseCase } from '../../../domain/useCases/favorite/GetFavoritesUseCase';
import { MongoFavoriteRepository } from '../../../infra/repositories/mongoose/repositories/favorite/MongoFavoriteRepository';

export class GetFavoritesFactory extends GetFavoritesUseCase {
  constructor() {
    const getFavoritesData = new MongoFavoriteRepository();
    super({ getFavoritesData });
  }
}
