import { GetUserByEmailUseCase } from '../../../domain/useCases/GetUserByEmailUseCase';
import { MongoUserRepository } from '../../../infra/repositories/mongoose/repositories/MongoUserRepository';

export class GetUserByEmailFactory extends GetUserByEmailUseCase {
  constructor() {
    const getUserByEmailData = new MongoUserRepository();
    super({ getUserByEmailData });
  }
}
