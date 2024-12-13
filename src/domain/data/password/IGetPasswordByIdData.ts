import { PasswordEntity } from '../../entities/password/PasswordEntity';

export type Params = {
  userId: string;
  passwordId: string;
};

export type Result = PasswordEntity;

export interface IGetPasswordByIdData {
  getPasswordById(params: Params): Promise<Result>;
}
