import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { FavoriteError } from '../../../src/domain/errors/favorite/FavoriteError';
import {
  GetFavoriteByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/Favorite/GetFavoriteByIdUseCase';
import { GetFavoriteByIdSpy } from '../../provider/spys/favorite/GetFavoriteByIdSpy';

type MakeSut = {
  useCase: GetFavoriteByIdUseCase;
  getFavoriteByIdData: GetFavoriteByIdSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const getFavoriteByIdData = new GetFavoriteByIdSpy();
  const useCase = new GetFavoriteByIdUseCase({
    getFavoriteByIdData: getFavoriteByIdData,
  });
  const params = {
    userId: faker.database.mongodbObjectId(),
    favoriteId: faker.database.mongodbObjectId(),
  };

  return {
    getFavoriteByIdData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getFavoriteByIdData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getFavoriteByIdData.params).toEqual(params);
  });

  test('should throw Favorite by ID Not found', async () => {
    const { useCase, getFavoriteByIdData, params } = makeSut();

    vi.spyOn(getFavoriteByIdData, 'getFavoriteById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new FavoriteError({ message: 'FavoriteNotFound' }),
    );
  });

  test('Shoud be able get user by ID', async () => {
    const { useCase, params, getFavoriteByIdData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getFavoriteByIdData.result);
  });
});
