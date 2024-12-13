import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  DeletePasswordByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/password/DeletePasswordByIdUseCase';
import { DeletePasswordByIdSpy } from '../../provider/spys/password/DeletePasswordByIdSpy';

type SutTypes = {
  useCase: DeletePasswordByIdUseCase;
  deletePasswordByIdData: DeletePasswordByIdSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const deletePasswordByIdData = new DeletePasswordByIdSpy();
  const useCase = new DeletePasswordByIdUseCase({ deletePasswordByIdData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    passwordId: faker.database.mongodbObjectId(),
  };

  return {
    params,
    useCase,
    deletePasswordByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { deletePasswordByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(deletePasswordByIdData.params).toEqual(params);
  });
});
