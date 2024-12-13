import {
  IDeletePasswordByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/password/IDeletePasswordByIdData';

export class DeletePasswordByIdSpy implements IDeletePasswordByIdData {
  params: Params;

  result: true;

  async deletePasswordById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
