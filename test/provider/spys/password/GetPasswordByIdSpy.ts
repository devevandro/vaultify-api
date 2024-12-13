import { faker } from '@faker-js/faker';

import {
  IGetPasswordByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/password/IGetPasswordByIdData';

export class GetPasswordByIdSpy implements IGetPasswordByIdData {
  public params: Params;
  public result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    urlSite: faker.lorem.text(),
    password: faker.lorem.text(),
    login: faker.lorem.text(),
  };

  async getPasswordById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
