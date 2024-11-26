import { faker } from '@faker-js/faker';

import {
  ICreateCommandData,
  Params,
  Result,
} from '../../../../src/domain/data/command/ICreateCommandData';

export class CreateCommandSpy implements ICreateCommandData {
  params: Params;

  result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    tag: faker.lorem.text(),
    command: faker.lorem.text(),
    title: faker.lorem.text(),
  };

  async createCommand(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
