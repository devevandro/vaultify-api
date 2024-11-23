import { faker } from '@faker-js/faker';

import {
  IGetUserByEmailData,
  Params,
  Result,
} from '../../../../src/domain/data/user/IGetUserByEmailData';

export class GetUserByEmailSpy implements IGetUserByEmailData {
  public params: Params;
  public result: Result = {
    userId: faker.database.mongodbObjectId(),
    fullName: faker.lorem.text(),
    email: faker.internet.email(),
  };

  async getUserByEmail(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
