import IUseCase from '../../../core/IUseCase';
import { IGetUserByEmailData } from '../../data/user/IGetUserByEmailData';
import { UserEntity } from '../../entities/user/UserEntity';
import { UserError } from '../../errors/user/UserError';

export type RequestDTO = string;

export type ResponseDTO = UserEntity;

export class GetUserByEmailUseCase
  implements IUseCase<RequestDTO, ResponseDTO>
{
  constructor(
    private readonly dependencies: { getUserByEmailData: IGetUserByEmailData },
  ) {}

  async execute(email: RequestDTO): Promise<ResponseDTO> {
    const { getUserByEmailData } = this.dependencies;
    const user = await getUserByEmailData.getUserByEmail(email);

    if (!user) {
      throw new UserError({ message: 'UserNotFound' });
    }

    return user;
  }
}
