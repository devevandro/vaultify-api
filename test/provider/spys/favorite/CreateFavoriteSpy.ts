import { faker } from '@faker-js/faker';

import {
  ICreateFavoriteData,
  Params,
  Result,
} from '../../../../src/domain/data/favorite/ICreateFavoriteData';

export class CreateFavoriteSpy implements ICreateFavoriteData {
  params: Params;

  result: Result = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    url: faker.lorem.text(),
    description: faker.lorem.text(),
    name: faker.lorem.text(),
  };

  async createFavorite(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
