import { GetUserByIdUseCase } from '../../../domain/useCases/user/GetUserByIdUseCase';
import { MongoUserRepository } from '../../../infra/repositories/mongoose/repositories/MongoUserRepository';

export class GetUserByIdFactory extends GetUserByIdUseCase {
  constructor() {
    const getUserByIdData = new MongoUserRepository();
    super({ getUserByIdData });
  }
}
