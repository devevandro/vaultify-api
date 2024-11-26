import { faker } from '@faker-js/faker';
import {
  IGetCommandsData,
  Params,
  Result,
} from '../../../../src/domain/data/command/IGetCommandsData';

export class GetCommandsSpy implements IGetCommandsData {
  public params: Params;
  public result: Result = [
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      tag: faker.lorem.text(),
      command: faker.lorem.text(),
      title: faker.lorem.text(),
    },
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      tag: faker.lorem.text(),
      command: faker.lorem.text(),
      title: faker.lorem.text(),
    },
  ];

  async getCommands(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
