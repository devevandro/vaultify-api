import { CreateCommandUseCase } from '../../../domain/useCases/command/CreateCommandByIdUseCase';
import { MongoCommandRepository } from '../../../infra/repositories/mongoose/repositories/command/MongoCommandRepository';

export class CreateCommandFactory extends CreateCommandUseCase {
  constructor() {
    const createCommandByIdData = new MongoCommandRepository();
    super({ createCommandByIdData });
  }
}
