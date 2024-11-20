import * as UserData from '../../domain/data/user/IUserData';
import { UserBaseApi } from './UserBaseApi';

export class UserProvider extends UserBaseApi implements UserData.IUserData {
  async getUserById(params: UserData.Params): Promise<UserData.Result> {
    const { data } = await this.api.get(`/user=${params.userId}`);

    return data;
  }
}
