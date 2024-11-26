import { GetCommandsUseCase } from '../../../domain/useCases/command/GetCommandsUseCase';
import { MongoCommandRepository } from '../../../infra/repositories/mongoose/repositories/command/MongoCommandRepository';

export class GetCommandsFactory extends GetCommandsUseCase {
  constructor() {
    const getCommandsData = new MongoCommandRepository();
    super({ getCommandsData });
  }
}
