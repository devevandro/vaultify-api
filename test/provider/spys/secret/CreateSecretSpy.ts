import { faker } from '@faker-js/faker';

import {
  ICreateSecretData,
  Params,
  Result,
} from '../../../../src/domain/data/secret/ICreateSecretData';

export class CreateSecretSpy implements ICreateSecretData {
  params: Params;

  result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    value: faker.lorem.text(),
    description: faker.lorem.text(),
    name: faker.lorem.text(),
  };

  async createSecret(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
