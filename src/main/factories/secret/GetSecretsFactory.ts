import { GetSecretsUseCase } from '../../../domain/useCases/secret/GetSecretsUseCase';
import { MongoSecretRepository } from '../../../infra/repositories/mongoose/repositories/secret/MongoSecretRepository';

export class GetSecretsFactory extends GetSecretsUseCase {
  constructor() {
    const getSecretsData = new MongoSecretRepository();
    super({ getSecretsData });
  }
}
