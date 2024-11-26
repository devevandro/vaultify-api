import { faker } from '@faker-js/faker';

import {
  IGetCommandByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/command/IGetCommandByIdData';

export class GetCommandByIdSpy implements IGetCommandByIdData {
  public params: Params;
  public result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    tag: faker.lorem.text(),
    command: faker.lorem.text(),
    title: faker.lorem.text(),
  };

  async getCommandById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
