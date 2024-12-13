import { UpdatePasswordByIdUseCase } from '../../../domain/useCases/password/UpdatePasswordByIdUseCase';
import { MongoPasswordRepository } from '../../../infra/repositories/mongoose/repositories/password/MongoPasswordRepository';

export class UpdatePasswordByIdFactory extends UpdatePasswordByIdUseCase {
  constructor() {
    const updatePasswordByIdData = new MongoPasswordRepository();
    super({ updatePasswordByIdData });
  }
}
