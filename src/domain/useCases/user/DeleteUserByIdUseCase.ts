import IUseCase from '../../../core/IUseCase';
import {
  IDeleteUserByIdData,
  Params,
  Result,
} from '../../data/user/IDeleteUserByIdData';
import { IGetUserByIdData } from '../../data/user/IGetUserByIdData';
import { GetUserError } from '../../errors/user/GetUserError';

export class DeleteUserByIdUseCase implements IUseCase<string, boolean> {
  constructor(
    private readonly dependencies: {
      getUserByIdData: IGetUserByIdData;
      deleteUserByIdData: IDeleteUserByIdData;
    },
  ) {}

  async execute(userId: Params): Promise<Result> {
    const { getUserByIdData, deleteUserByIdData } = this.dependencies;

    const user = await getUserByIdData.getUserById(userId);

    if (user) {
      await deleteUserByIdData.deleteUserById(userId);

      return true;
    }

    throw new GetUserError({ message: 'UserNotFound' });
  }
}
