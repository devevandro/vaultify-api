import {
  IDeleteCommandByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/command/IDeleteCommandByIdData';

export class DeleteCommandByIdSpy implements IDeleteCommandByIdData {
  params: Params;

  result: true;

  async deleteCommandById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
