import { CreateSecretUseCase } from '../../../domain/useCases/secret/CreateSecretByIdUseCase';
import { MongoSecretRepository } from '../../../infra/repositories/mongoose/repositories/secret/MongoSecretRepository';

export class CreateSecretFactory extends CreateSecretUseCase {
  constructor() {
    const createSecretData = new MongoSecretRepository();
    super({ createSecretData });
  }
}
