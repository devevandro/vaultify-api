import IUseCase from '../../core/IUseCase';
import { IUserData, Params, Result } from '../data/user/IUserData';
import { UserError } from '../errors/UserError';

export type RequestDTO = Params;
export type ResponseDTO = Result;

export class UserUseCase implements IUseCase<RequestDTO, ResponseDTO> {
  constructor(private readonly dependencies: { userData: IUserData }) {}

  async execute({ userId }: RequestDTO): Promise<ResponseDTO> {
    const { userData } = this.dependencies;
    const user = await userData.getUserById({ userId });

    if (!user) {
      throw new UserError({ message: 'UserNotFound' });
    }

    return user;
  }
}
