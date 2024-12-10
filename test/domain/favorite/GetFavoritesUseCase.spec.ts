import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { FavoriteError } from '../../../src/domain/errors/favorite/FavoriteError';
import { GetFavoritesUseCase } from '../../../src/domain/useCases/favorite/GetFavoritesUseCase';
import { GetFavoritesSpy } from '../../provider/spys/favorite/GetFavoritesSpy';

type MakeSut = {
  useCase: GetFavoritesUseCase;
  getFavoritesData: GetFavoritesSpy;
  params: string;
};

const makeSut = (): MakeSut => {
  const getFavoritesData = new GetFavoritesSpy();
  const useCase = new GetFavoritesUseCase({
    getFavoritesData,
  });
  const params = faker.database.mongodbObjectId();

  return {
    getFavoritesData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getFavoritesData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getFavoritesData.params).toEqual(params);
  });

  test('should throw Favorites Not found', async () => {
    const { useCase, getFavoritesData, params } = makeSut();

    vi.spyOn(getFavoritesData, 'getFavorites').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new FavoriteError({ message: 'FavoritesNotFound' }),
    );
  });

  test('Shoud be able get All Favorites', async () => {
    const { useCase, params, getFavoritesData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getFavoritesData.result);
  });
});
