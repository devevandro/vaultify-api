import { DeleteCommandByIdUseCase } from '../../../domain/useCases/command/DeleteCommandByIdUseCase';
import { MongoCommandRepository } from '../../../infra/repositories/mongoose/repositories/command/MongoCommandRepository';

export class DeleteCommandByIdFactory extends DeleteCommandByIdUseCase {
  constructor() {
    const deleteCommandByIdData = new MongoCommandRepository();
    super({ deleteCommandByIdData });
  }
}
