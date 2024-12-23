import { connection, mongo } from 'mongoose';

import * as CreateUserData from '../../../../../domain/data/user/ICreateUserData';
import * as DeleteUserByIdData from '../../../../../domain/data/user/IDeleteUserByIdData';
import * as GetUserByEmailData from '../../../../../domain/data/user/IGetUserByEmailData';
import * as GetUserByIdData from '../../../../../domain/data/user/IGetUserByIdData';
import { UserMapper } from '../../mappers/user/UserMapper';
import { IUserSchema, UserSchema } from '../../models/user/UserModel';

export class MongoUserRepository
  implements
    CreateUserData.ICreateUserData,
    DeleteUserByIdData.IDeleteUserByIdData,
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

  async createUser(
    params: CreateUserData.Params,
  ): Promise<CreateUserData.Result> {
    const userCreated = await this.userModel.create(params);
    return userCreated ? UserMapper.toEntity(userCreated) : null;
  }

  async deleteUserById(
    userId: DeleteUserByIdData.Params,
  ): Promise<DeleteUserByIdData.Result> {
    await this.userModel.deleteOne({ _id: userId });
    return true;
  }
}
