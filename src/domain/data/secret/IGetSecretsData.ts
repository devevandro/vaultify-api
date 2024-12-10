import { SecretEntity } from '../../entities/secret/SecretEntity';

export type Params = string;
export type Result = SecretEntity[];

export interface IGetSecretsData {
  getSecrets(userId: Params): Promise<Result>;
}
