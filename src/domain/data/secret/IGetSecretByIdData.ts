import { SecretEntity } from '../../entities/secret/SecretEntity';

export type Params = {
  userId: string;
  secretId: string;
};

export type Result = SecretEntity;

export interface IGetSecretByIdData {
  getSecretById(params: Params): Promise<Result>;
}
