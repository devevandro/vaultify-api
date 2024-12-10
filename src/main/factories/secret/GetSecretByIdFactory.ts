import { GetSecretByIdUseCase } from '../../../domain/useCases/secret/GetSecretByIdUseCase';
import { MongoSecretRepository } from '../../../infra/repositories/mongoose/repositories/secret/MongoSecretRepository';

export class GetSecretByIdFactory extends GetSecretByIdUseCase {
  constructor() {
    const getSecretByIdData = new MongoSecretRepository();
    super({ getSecretByIdData });
  }
}
