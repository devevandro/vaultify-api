import { UserEntity } from '../../entities/user/UserEntity';

export type Params = {
  userId: string;
};

export type Result = UserEntity;

export interface IUserData {
  getUserById(params: Params): Promise<Result>;
}
