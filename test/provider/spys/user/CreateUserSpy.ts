import { faker } from '@faker-js/faker';

import {
  ICreateUserData,
  Params,
  Result,
} from '../../../../src/domain/data/user/ICreateUserData';

export class CreateUserSpy implements ICreateUserData {
  params: Params;

  result: Result = {
    userId: faker.database.mongodbObjectId(),
    fullName: faker.lorem.text(),
    email: faker.internet.email(),
  };

  async createUser(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
