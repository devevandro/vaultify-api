import {
  IUpdateSecretData,
  Params,
} from '../../../../src/domain/data/secret/IUpdateSecretData';

export class UpdateSecretSpy implements IUpdateSecretData {
  params: Params;

  async updateSecret(params: Params): Promise<boolean> {
    this.params = params;
    return true;
  }
}
