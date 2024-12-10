import {
  IDeleteSecretByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/secret/IDeleteSecretByIdData';

export class DeleteSecretByIdSpy implements IDeleteSecretByIdData {
  params: Params;

  result: true;

  async deleteSecretById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
