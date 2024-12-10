import { SecretEntity } from '../../entities/secret/SecretEntity';

export type Params = {
  userId: string;
  value: string;
  name: string;
  description?: string;
};

export type Result = SecretEntity;

export interface ICreateSecretData {
  createSecret(params: Params): Promise<Result>;
}
