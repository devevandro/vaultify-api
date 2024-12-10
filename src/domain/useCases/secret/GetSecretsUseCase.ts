import IUseCase from '../../../core/IUseCase';
import { IGetSecretsData } from '../../data/secret/IGetSecretsData';
import { SecretEntity } from '../../entities/secret/SecretEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type ResponseDTO = SecretEntity[];

export class GetSecretsUseCase implements IUseCase<string, ResponseDTO> {
  constructor(
    private readonly dependencies: { getSecretsData: IGetSecretsData },
  ) {}

  async execute(userId: string): Promise<ResponseDTO> {
    const { getSecretsData } = this.dependencies;
    const Secrets = await getSecretsData.getSecrets(userId);

    if (!Secrets) {
      throw new ErrorMessage({ message: 'SecretsNotFound' });
    }

    return Secrets;
  }
}
