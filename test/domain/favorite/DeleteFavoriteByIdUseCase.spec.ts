import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  DeleteFavoriteByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/favorite/DeleteFavoriteByIdUseCase';
import { DeleteFavoriteByIdSpy } from '../../provider/spys/favorite/DeleteFavoriteByIdSpy';

type SutTypes = {
  useCase: DeleteFavoriteByIdUseCase;
  deleteFavoriteByIdData: DeleteFavoriteByIdSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const deleteFavoriteByIdData = new DeleteFavoriteByIdSpy();
  const useCase = new DeleteFavoriteByIdUseCase({ deleteFavoriteByIdData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    favoriteId: faker.database.mongodbObjectId(),
  };

  return {
    params,
    useCase,
    deleteFavoriteByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { deleteFavoriteByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(deleteFavoriteByIdData.params).toEqual(params);
  });
});
