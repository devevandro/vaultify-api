import { connection, mongo } from 'mongoose';

import * as GetPasswordByIdData from '../../../../../domain/data/password/IGetPasswordByIdData';
import * as GetPasswordsData from '../../../../../domain/data/password/IGetPasswordsData';
import * as CreatePasswordData from '../../../../../domain/data/password/ICreatePasswordData';
import * as UpdatePasswordData from '../../../../../domain/data/password/IUpdatePasswordData';
import * as DeletePasswordByIdData from '../../../../../domain/data/password/IDeletePasswordByIdData';
import {
  IPasswordSchema,
  PasswordSchema,
} from '../../models/password/PasswordModel';
import { PasswordMapper } from '../../mappers/password/PasswordMapper';

export class MongoPasswordRepository
  implements
    GetPasswordsData.IGetPasswordsData,
    GetPasswordByIdData.IGetPasswordByIdData,
    CreatePasswordData.ICreatePasswordData,
    DeletePasswordByIdData.IDeletePasswordByIdData,
    UpdatePasswordData.IUpdatePasswordData
{
  private PasswordModel = connection.model<IPasswordSchema>(
    'Passwords',
    PasswordSchema,
  );

  async getPasswords(
    userId: GetPasswordsData.Params,
  ): Promise<GetPasswordsData.Result> {
    const userMongoId = new mongo.ObjectId(userId);
    const passwords = await this.PasswordModel.find({ userId: userMongoId });

    return passwords.length > 0
      ? passwords.map(Password => PasswordMapper.toEntity(Password))
      : null;
  }

  async getPasswordById({
    userId,
    passwordId,
  }: GetPasswordByIdData.Params): Promise<GetPasswordByIdData.Result> {
    const passwordById = await this.PasswordModel.findOne({
      userId,
      passwordId,
    });

    return passwordById ? PasswordMapper.toEntity(passwordById) : null;
  }

  async createPassword(
    params: CreatePasswordData.Params,
  ): Promise<CreatePasswordData.Result> {
    const passwordCreatred = await this.PasswordModel.create(params);
    return passwordCreatred ? PasswordMapper.toEntity(passwordCreatred) : null;
  }

  async deletePasswordById({
    userId,
    passwordId,
  }: DeletePasswordByIdData.Params): Promise<DeletePasswordByIdData.Result> {
    await this.PasswordModel.deleteOne({ _id: userId, passwordId });
    return true;
  }

  async updatePassword(
    params: UpdatePasswordData.Params,
  ): Promise<UpdatePasswordData.Result> {
    const passwordUpdated = await this.PasswordModel.updateOne(
      { userId: params?.userId, password: params.id },
      params,
    );
    return !!passwordUpdated;
  }
}
