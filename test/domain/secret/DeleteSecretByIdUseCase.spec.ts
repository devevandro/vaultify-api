import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  DeleteSecretByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/secret/DeleteSecretByIdUseCase';
import { DeleteSecretByIdSpy } from '../../provider/spys/secret/DeleteSecretByIdSpy';

type SutTypes = {
  useCase: DeleteSecretByIdUseCase;
  deleteSecretByIdData: DeleteSecretByIdSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const deleteSecretByIdData = new DeleteSecretByIdSpy();
  const useCase = new DeleteSecretByIdUseCase({ deleteSecretByIdData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    secretId: faker.database.mongodbObjectId(),
  };

  return {
    params,
    useCase,
    deleteSecretByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { deleteSecretByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(deleteSecretByIdData.params).toEqual(params);
  });
});
