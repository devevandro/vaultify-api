import { UpdateSecretByIdUseCase } from '../../../domain/useCases/secret/UpdateSecretByIdUseCase';
import { MongoSecretRepository } from '../../../infra/repositories/mongoose/repositories/secret/MongoSecretRepository';

export class UpdateSecretByIdFactory extends UpdateSecretByIdUseCase {
  constructor() {
    const updateSecretByIdData = new MongoSecretRepository();
    super({ updateSecretByIdData });
  }
}
