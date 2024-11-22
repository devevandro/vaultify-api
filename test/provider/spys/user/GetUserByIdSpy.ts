import { faker } from '@faker-js/faker';

import {
  IGetUserByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/user/IGetUserByIdData';

export class GetUserByIdSpy implements IGetUserByIdData {
  public params: Params;
  public result: Result = {
    userId: faker.database.mongodbObjectId(),
    fullName: faker.lorem.text(),
    email: faker.internet.email(),
  };

  async getUserById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
