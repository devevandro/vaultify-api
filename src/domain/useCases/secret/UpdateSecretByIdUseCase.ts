import IUseCase from '../../../core/IUseCase';
import { IUpdateSecretData, Params } from '../../data/secret/IUpdateSecretData';

export type RequestDTO = {
  id: string;
  userId: string;
  name?: string;
  value?: string;
  description?: string;
};

export class UpdateSecretByIdUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      updateSecretByIdData: IUpdateSecretData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { updateSecretByIdData } = this.dependencies;

    await updateSecretByIdData.updateSecret(params);

    return true;
  }
}
