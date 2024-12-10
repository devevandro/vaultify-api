import { connection, mongo } from 'mongoose';

import * as GetSecretByIdData from '../../../../../domain/data/secret/IGetSecretByIdData';
import * as GetSecretsData from '../../../../../domain/data/secret/IGetSecretsData';
import * as CreateSecretData from '../../../../../domain/data/secret/ICreateSecretData';
import * as UpdateSecretData from '../../../../../domain/data/secret/IUpdateSecretData';
import * as DeleteSecretByIdData from '../../../../../domain/data/secret/IDeleteSecretByIdData';
import { ISecretSchema, SecretSchema } from '../../models/secret/SecretModel';
import { SecretMapper } from '../../mappers/secret/SecretMapper';

export class MongoSecretRepository
  implements
    GetSecretsData.IGetSecretsData,
    GetSecretByIdData.IGetSecretByIdData,
    CreateSecretData.ICreateSecretData,
    DeleteSecretByIdData.IDeleteSecretByIdData,
    UpdateSecretData.IUpdateSecretData
{
  private SecretModel = connection.model<ISecretSchema>(
    'Secrets',
    SecretSchema,
  );

  async getSecrets(
    userId: GetSecretsData.Params,
  ): Promise<GetSecretsData.Result> {
    const userMongoId = new mongo.ObjectId(userId);
    const secrets = await this.SecretModel.find({ userId: userMongoId });

    return secrets.length > 0
      ? secrets.map(Secret => SecretMapper.toEntity(Secret))
      : null;
  }

  async getSecretById({
    userId,
    secretId,
  }: GetSecretByIdData.Params): Promise<GetSecretByIdData.Result> {
    const secretById = await this.SecretModel.findOne({
      userId,
      secretId,
    });

    return secretById ? SecretMapper.toEntity(secretById) : null;
  }

  async createSecret(
    params: CreateSecretData.Params,
  ): Promise<CreateSecretData.Result> {
    const secretCreated = await this.SecretModel.create(params);
    return secretCreated ? SecretMapper.toEntity(secretCreated) : null;
  }

  async deleteSecretById({
    userId,
    secretId,
  }: DeleteSecretByIdData.Params): Promise<DeleteSecretByIdData.Result> {
    await this.SecretModel.deleteOne({ _id: userId, secretId });
    return true;
  }

  async updateSecret(
    params: UpdateSecretData.Params,
  ): Promise<UpdateSecretData.Result> {
    const secretUpdated = await this.SecretModel.updateOne(
      { userId: params?.userId, secret: params.id },
      params,
    );
    return !!secretUpdated;
  }
}
