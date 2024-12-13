import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  RequestDTO,
  UpdateFavoriteByIdUseCase,
} from '../../../src/domain/useCases/favorite/UpdateFavoriteByIdUseCase';
import { UpdateFavoriteSpy } from '../../provider/spys/favorite/UpdateFavoriteSpy';

type SutTypes = {
  useCase: UpdateFavoriteByIdUseCase;
  updateFavoriteByIdData: UpdateFavoriteSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const updateFavoriteByIdData = new UpdateFavoriteSpy();
  const useCase = new UpdateFavoriteByIdUseCase({ updateFavoriteByIdData });
  const params = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    url: faker.lorem.text(),
    name: faker.lorem.text(),
    description: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    updateFavoriteByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { updateFavoriteByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(updateFavoriteByIdData.params).toEqual(params);
  });
});
