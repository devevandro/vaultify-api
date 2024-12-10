import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  CreateFavoriteUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/favorite/CreateFavoriteByIdUseCase';
import { CreateFavoriteSpy } from '../../provider/spys/favorite/CreateFavoriteSpy';

type SutTypes = {
  useCase: CreateFavoriteUseCase;
  createFavoriteData: CreateFavoriteSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const createFavoriteData = new CreateFavoriteSpy();
  const useCase = new CreateFavoriteUseCase({ createFavoriteData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    description: faker.lorem.text(),
    name: faker.lorem.text(),
    url: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    createFavoriteData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { createFavoriteData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(createFavoriteData.params).toEqual(params);
  });
});
