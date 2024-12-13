import { GetPasswordByIdUseCase } from '../../../domain/useCases/password/GetPasswordByIdUseCase';
import { MongoPasswordRepository } from '../../../infra/repositories/mongoose/repositories/password/MongoPasswordRepository';

export class GetPasswordByIdFactory extends GetPasswordByIdUseCase {
  constructor() {
    const getPasswordByIdData = new MongoPasswordRepository();
    super({ getPasswordByIdData });
  }
}
