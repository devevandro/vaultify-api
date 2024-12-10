import IUseCase from '../../../core/IUseCase';
import {
  IGetSecretByIdData,
  Params,
} from '../../data/secret/IGetSecretByIdData';
import { SecretEntity } from '../../entities/secret/SecretEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type RequestDTO = {
  userId: string;
  secretId: string;
};
export type ResponseDTO = SecretEntity;

export class GetSecretByIdUseCase implements IUseCase<RequestDTO, ResponseDTO> {
  constructor(
    private readonly dependencies: {
      getSecretByIdData: IGetSecretByIdData;
    },
  ) {}

  async execute({ userId, secretId }: Params): Promise<ResponseDTO> {
    const { getSecretByIdData } = this.dependencies;
    const secretById = await getSecretByIdData.getSecretById({
      userId,
      secretId,
    });

    if (!secretById) {
      throw new ErrorMessage({ message: 'SecretNotFound' });
    }

    return secretById;
  }
}
