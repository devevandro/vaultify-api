import { PasswordEntity } from '../../entities/password/PasswordEntity';

export type Params = {
  userId: string;
  urlSite: string;
  login: string;
  password: string;
  description?: string;
};

export type Result = PasswordEntity;

export interface ICreatePasswordData {
  createPassword(params: Params): Promise<Result>;
}
