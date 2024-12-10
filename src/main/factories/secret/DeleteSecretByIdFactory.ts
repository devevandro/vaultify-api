import { DeleteSecretByIdUseCase } from '../../../domain/useCases/secret/DeleteSecretByIdUseCase';
import { MongoSecretRepository } from '../../../infra/repositories/mongoose/repositories/secret/MongoSecretRepository';

export class DeleteSecretByIdFactory extends DeleteSecretByIdUseCase {
  constructor() {
    const deleteSecretByIdData = new MongoSecretRepository();
    super({ deleteSecretByIdData });
  }
}
