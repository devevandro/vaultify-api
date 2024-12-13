import { faker } from '@faker-js/faker';

import {
  ICreatePasswordData,
  Params,
  Result,
} from '../../../../src/domain/data/password/ICreatePasswordData';

export class CreatePasswordSpy implements ICreatePasswordData {
  params: Params;

  result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    urlSite: faker.lorem.text(),
    login: faker.lorem.text(),
    password: faker.lorem.text(),
  };

  async createPassword(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
