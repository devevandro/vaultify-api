import IUseCase from '../../../core/IUseCase';
import {
  ICreateUserData,
  Params,
  Result,
} from '../../data/user/ICreateUserData';
import { CreateUserError } from '../../errors/user/CreateUserError';

export type RequestDTO = Params;
export type ResponseDTO = Result;

export class CreateUserUseCase implements IUseCase<RequestDTO, ResponseDTO> {
  constructor(
    private readonly dependencies: { createUserData: ICreateUserData },
  ) {}

  async execute(params: Params): Promise<ResponseDTO> {
    const { createUserData } = this.dependencies;
    const user = await createUserData.createUser(params);

    if (!user) {
      throw new CreateUserError({ message: 'ErrorToCreateUser' });
    }

    return user;
  }
}
