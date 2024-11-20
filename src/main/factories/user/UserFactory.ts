import { GetUserByIdUseCase } from '../../../domain/useCases/GetUserByIdUseCase';
import { MongoUserRepository } from '../../../infra/repositories/mongoose/repositories/MongoUserRepository';

export class UserFactory extends GetUserByIdUseCase {
  constructor() {
    const getUserByIdData = new MongoUserRepository();
    super({ getUserByIdData });
  }
}
