import IUseCase from '../../../core/IUseCase';
import { ICreateSecretData, Params } from '../../data/secret/ICreateSecretData';

export type RequestDTO = {
  userId: string;
  value: string;
  name: string;
  description?: string;
};

export class CreateSecretUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      createSecretData: ICreateSecretData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { createSecretData } = this.dependencies;

    await createSecretData.createSecret(params);

    return true;
  }
}
