import {
  IUserData,
  Params,
  Result,
} from '../../../../domain/data/user/IUserData';
import { faker } from '@faker-js/faker';

export class UserSpy implements IUserData {
  public params: Params;
  public result: Result = {
    id: faker.database.mongodbObjectId(),
    name: faker.lorem.text(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  async getUserById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
