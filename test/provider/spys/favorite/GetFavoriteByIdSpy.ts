import { faker } from '@faker-js/faker';

import {
  IGetFavoriteByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/favorite/IGetFavoriteByIdData';

export class GetFavoriteByIdSpy implements IGetFavoriteByIdData {
  public params: Params;
  public result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    name: faker.lorem.text(),
    description: faker.lorem.text(),
    url: faker.lorem.text(),
  };

  async getFavoriteById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
