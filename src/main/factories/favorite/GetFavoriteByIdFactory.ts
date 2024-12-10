import { GetFavoriteByIdUseCase } from '../../../domain/useCases/favorite/GetFavoriteByIdUseCase';
import { MongoFavoriteRepository } from '../../../infra/repositories/mongoose/repositories/favorite/MongoFavoriteRepository';

export class GetFavoriteByIdFactory extends GetFavoriteByIdUseCase {
  constructor() {
    const getFavoriteByIdData = new MongoFavoriteRepository();
    super({ getFavoriteByIdData });
  }
}
