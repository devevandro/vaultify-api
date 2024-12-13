import { PasswordEntity } from '../../entities/password/PasswordEntity';

export type Params = string;
export type Result = PasswordEntity[];

export interface IGetPasswordsData {
  getPasswords(userId: Params): Promise<Result>;
}
