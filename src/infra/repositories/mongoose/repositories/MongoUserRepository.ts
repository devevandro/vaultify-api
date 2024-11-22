import { connection } from 'mongoose';

import * as GetUserByIdData from '../../../../domain/data/user/IGetUserByIdData';
import { IUserSchema, UserSchema } from '../models/UserModel';
import { UserMapper } from '../mappers/UserMapper';

export class MongoUserRepository implements GetUserByIdData.IGetUserByIdData {
  private userModel = connection.model<IUserSchema>('users', UserSchema);

  async getUserById(
    userId: GetUserByIdData.Params,
  ): Promise<GetUserByIdData.Result> {
    const userById = await this.userModel.findById({ _id: userId });

    return userById ? UserMapper.toEntity(userById) : null;
  }
}
