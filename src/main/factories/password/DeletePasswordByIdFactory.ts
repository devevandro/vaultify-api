import { DeletePasswordByIdUseCase } from '../../../domain/useCases/password/DeletePasswordByIdUseCase';
import { MongoPasswordRepository } from '../../../infra/repositories/mongoose/repositories/password/MongoPasswordRepository';

export class DeletePasswordByIdFactory extends DeletePasswordByIdUseCase {
  constructor() {
    const deletePasswordByIdData = new MongoPasswordRepository();
    super({ deletePasswordByIdData });
  }
}
