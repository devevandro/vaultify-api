import { UserEntity } from '../../entities/user/UserEntity';

export type Params = {
  email: string;
  fullName: string;
  salt: string;
};

export type Result = UserEntity;

export interface ICreateUserData {
  createUser(params: Params): Promise<Result>;
}
