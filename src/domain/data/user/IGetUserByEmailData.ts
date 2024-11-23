import { UserEntity } from '../../entities/user/UserEntity';

export type Params = string;
export type Result = UserEntity;

export interface IGetUserByEmailData {
  getUserByEmail(params: Params): Promise<Result>;
}
