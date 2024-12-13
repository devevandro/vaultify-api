import {
  IUpdatePasswordData,
  Params,
} from '../../../../src/domain/data/password/IUpdatePasswordData';

export class UpdatePasswordSpy implements IUpdatePasswordData {
  params: Params;

  async updatePassword(params: Params): Promise<boolean> {
    this.params = params;
    return true;
  }
}
