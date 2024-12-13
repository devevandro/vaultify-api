import IUseCase from '../../../core/IUseCase';
import {
  IGetPasswordByIdData,
  Params,
} from '../../data/password/IGetPasswordByIdData';
import { PasswordEntity } from '../../entities/password/PasswordEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type RequestDTO = {
  userId: string;
  passwordId: string;
};
export type ResponseDTO = PasswordEntity;

export class GetPasswordByIdUseCase
  implements IUseCase<RequestDTO, ResponseDTO>
{
  constructor(
    private readonly dependencies: {
      getPasswordByIdData: IGetPasswordByIdData;
    },
  ) {}

  async execute({ userId, passwordId }: Params): Promise<ResponseDTO> {
    const { getPasswordByIdData } = this.dependencies;
    const PasswordById = await getPasswordByIdData.getPasswordById({
      userId,
      passwordId,
    });

    if (!PasswordById) {
      throw new ErrorMessage({ message: 'PasswordNotFound' });
    }

    return PasswordById;
  }
}
