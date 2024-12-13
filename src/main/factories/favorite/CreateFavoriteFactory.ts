import { CreateFavoriteUseCase } from '../../../domain/useCases/favorite/CreateFavoriteByIdUseCase';
import { MongoFavoriteRepository } from '../../../infra/repositories/mongoose/repositories/favorite/MongoFavoriteRepository';

export class CreateFavoriteFactory extends CreateFavoriteUseCase {
  constructor() {
    const createFavoriteData = new MongoFavoriteRepository();
    super({ createFavoriteData });
  }
}
