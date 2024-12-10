import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  RequestDTO,
  UpdateSecretByIdUseCase,
} from '../../../src/domain/useCases/secret/UpdateSecretByIdUseCase';
import { UpdateSecretSpy } from '../../provider/spys/secret/UpdateSecretSpy';

type SutTypes = {
  useCase: UpdateSecretByIdUseCase;
  updateSecretByIdData: UpdateSecretSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const updateSecretByIdData = new UpdateSecretSpy();
  const useCase = new UpdateSecretByIdUseCase({ updateSecretByIdData });
  const params = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    value: faker.lorem.text(),
    name: faker.lorem.text(),
    description: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    updateSecretByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { updateSecretByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(updateSecretByIdData.params).toEqual(params);
  });
});
