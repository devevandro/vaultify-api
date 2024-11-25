import { UserEntity } from '../../entities/user/UserEntity';

export type Params = {
  userId: string;
  tag: string;
  command: string;
  title: string;
  description?: string;
};

export type Result = UserEntity;

export interface ICreateCommandData {
  createCommand(params: Params): Promise<Result>;
}
