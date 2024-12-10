import { faker } from '@faker-js/faker';
import {
  IGetSecretsData,
  Params,
  Result,
} from '../../../../src/domain/data/secret/IGetSecretsData';

export class GetSecretsSpy implements IGetSecretsData {
  public params: Params;
  public result: Result = [
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      value: faker.lorem.text(),
      name: faker.lorem.text(),
      description: faker.lorem.text(),
    },
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      value: faker.lorem.text(),
      name: faker.lorem.text(),
      description: faker.lorem.text(),
    },
  ];

  async getSecrets(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
