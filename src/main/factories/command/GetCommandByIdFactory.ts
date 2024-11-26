import { GetCommandByIdUseCase } from '../../../domain/useCases/command/GetCommandByIdUseCase';
import { MongoCommandRepository } from '../../../infra/repositories/mongoose/repositories/command/MongoCommandRepository';

export class GetCommandByIdFactory extends GetCommandByIdUseCase {
  constructor() {
    const getCommandByIdData = new MongoCommandRepository();
    super({ getCommandByIdData });
  }
}
