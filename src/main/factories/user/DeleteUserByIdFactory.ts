import { DeleteUserByIdUseCase } from '../../../domain/useCases/user/DeleteUserByIdUseCase';
import { MongoUserRepository } from '../../../infra/repositories/mongoose/repositories/user/MongoUserRepository';

export class DeleteUserByIdFactory extends DeleteUserByIdUseCase {
  constructor() {
    const getUserByIdData = new MongoUserRepository();
    const deleteUserByIdData = new MongoUserRepository();
    super({ getUserByIdData, deleteUserByIdData });
  }
}
