import {
  IDeleteUserByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/user/IDeleteUserByIdData';

export class DeleteUserbyIdSpy implements IDeleteUserByIdData {
  params: Params;

  result: true;

  async deleteUserById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
