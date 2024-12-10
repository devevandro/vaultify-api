import { UpdateFavoriteByIdUseCase } from '../../../domain/useCases/favorite/UpdateFavoriteByIdUseCase';
import { MongoFavoriteRepository } from '../../../infra/repositories/mongoose/repositories/favorite/MongoFavoriteRepository';

export class UpdateFavoriteByIdFactory extends UpdateFavoriteByIdUseCase {
  constructor() {
    const updateFavoriteByIdData = new MongoFavoriteRepository();
    super({ updateFavoriteByIdData });
  }
}
