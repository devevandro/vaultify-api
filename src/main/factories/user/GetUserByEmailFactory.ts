import { GetUserByEmailUseCase } from '../../../domain/useCases/user/GetUserByEmailUseCase';
import { MongoUserRepository } from '../../../infra/repositories/mongoose/repositories/user/MongoUserRepository';

export class GetUserByEmailFactory extends GetUserByEmailUseCase {
  constructor() {
    const getUserByEmailData = new MongoUserRepository();
    super({ getUserByEmailData });
  }
}
