import { DeleteFavoriteByIdUseCase } from '../../../domain/useCases/favorite/DeleteFavoriteByIdUseCase';
import { MongoFavoriteRepository } from '../../../infra/repositories/mongoose/repositories/favorite/MongoFavoriteRepository';

export class DeleteFavoriteByIdFactory extends DeleteFavoriteByIdUseCase {
  constructor() {
    const deleteFavoriteByIdData = new MongoFavoriteRepository();
    super({ deleteFavoriteByIdData });
  }
}
