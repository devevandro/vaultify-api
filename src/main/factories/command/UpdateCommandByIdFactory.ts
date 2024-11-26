import { UpdateCommandByIdUseCase } from '../../../domain/useCases/command/UpdateCommandByIdUseCase';
import { MongoCommandRepository } from '../../../infra/repositories/mongoose/repositories/command/MongoCommandRepository';

export class UpdateCommandByIdFactory extends UpdateCommandByIdUseCase {
  constructor() {
    const updateCommandByIdData = new MongoCommandRepository();
    super({ updateCommandByIdData });
  }
}
