import { GetPasswordsUseCase } from '../../../domain/useCases/password/GetPasswordsUseCase';
import { MongoPasswordRepository } from '../../../infra/repositories/mongoose/repositories/password/MongoPasswordRepository';

export class GetPasswordsFactory extends GetPasswordsUseCase {
  constructor() {
    const getPasswordsData = new MongoPasswordRepository();
    super({ getPasswordsData });
  }
}
