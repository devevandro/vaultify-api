import { connection, mongo } from 'mongoose';

import * as GetUserByEmailData from '../../../../domain/data/user/IGetUserByEmailData';
import * as GetUserByIdData from '../../../../domain/data/user/IGetUserByIdData';
import { UserMapper } from '../mappers/UserMapper';
import { IUserSchema, UserSchema } from '../models/UserModel';

export class MongoUserRepository
  implements
    GetUserByIdData.IGetUserByIdData,
    GetUserByEmailData.IGetUserByEmailData
{
  private userModel = connection.model<IUserSchema>('users', UserSchema);

  async getUserById(
    userId: GetUserByIdData.Params,
  ): Promise<GetUserByIdData.Result> {
    const userMongoId = new mongo.ObjectId(userId);
    const userById = await this.userModel.findById({ _id: userMongoId });

    return userById ? UserMapper.toEntity(userById) : null;
  }

  async getUserByEmail(
    email: GetUserByEmailData.Params,
  ): Promise<GetUserByEmailData.Result> {
    const userByEmail = await this.userModel.findOne({ email });

    return userByEmail ? UserMapper.toEntity(userByEmail) : null;
  }
}