import IUseCase from '../../core/IUseCase';
import {
  IGetUserByIdData,
  Params,
  Result,
} from '../data/user/IGetUserByIdData';
import { UserError } from '../errors/user/UserError';

export type RequestDTO = Params;
export type ResponseDTO = Result;

export class GetUserByIdUseCase implements IUseCase<RequestDTO, ResponseDTO> {
  constructor(
    private readonly dependencies: { getUserByIdData: IGetUserByIdData },
  ) {}

  async execute({ userId }: RequestDTO): Promise<ResponseDTO> {
    const { getUserByIdData } = this.dependencies;
    const user = await getUserByIdData.getUserById({ userId });

    if (!user) {
      throw new UserError({ message: 'UserNotFound' });
    }

    return user;
  }
}
