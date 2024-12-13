import { faker } from '@faker-js/faker';
import {
  IGetPasswordsData,
  Params,
  Result,
} from '../../../../src/domain/data/password/IGetPasswordsData';

export class GetPasswordsSpy implements IGetPasswordsData {
  public params: Params;
  public result: Result = [
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      urlSite: faker.lorem.text(),
      password: faker.lorem.text(),
      login: faker.lorem.text(),
    },
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      urlSite: faker.lorem.text(),
      password: faker.lorem.text(),
      login: faker.lorem.text(),
    },
  ];

  async getPasswords(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
