import { faker } from '@faker-js/faker';
import {
  IGetFavoritesData,
  Params,
  Result,
} from '../../../../src/domain/data/favorite/IGetFavoritesData';

export class GetFavoritesSpy implements IGetFavoritesData {
  public params: Params;
  public result: Result = [
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      url: faker.lorem.text(),
      name: faker.lorem.text(),
      description: faker.lorem.text(),
    },
    {
      id: faker.database.mongodbObjectId(),
      userId: faker.database.mongodbObjectId(),
      url: faker.lorem.text(),
      name: faker.lorem.text(),
      description: faker.lorem.text(),
    },
  ];

  async getFavorites(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
