import { faker } from '@faker-js/faker';

import {
  IGetSecretByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/secret/IGetSecretByIdData';

export class GetSecretByIdSpy implements IGetSecretByIdData {
  public params: Params;
  public result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    name: faker.lorem.text(),
    description: faker.lorem.text(),
    value: faker.lorem.text(),
  };

  async getSecretById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
