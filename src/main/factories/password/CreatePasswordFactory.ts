import { CreatePasswordUseCase } from '../../../domain/useCases/password/CreatePasswordByIdUseCase';
import { MongoPasswordRepository } from '../../../infra/repositories/mongoose/repositories/password/MongoPasswordRepository';

export class CreatePasswordFactory extends CreatePasswordUseCase {
  constructor() {
    const createPasswordData = new MongoPasswordRepository();
    super({ createPasswordData });
  }
}
