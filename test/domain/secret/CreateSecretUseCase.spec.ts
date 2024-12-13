import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  CreateSecretUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/secret/CreateSecretByIdUseCase';
import { CreateSecretSpy } from '../../provider/spys/secret/CreateSecretSpy';

type SutTypes = {
  useCase: CreateSecretUseCase;
  createSecretData: CreateSecretSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const createSecretData = new CreateSecretSpy();
  const useCase = new CreateSecretUseCase({ createSecretData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    description: faker.lorem.text(),
    name: faker.lorem.text(),
    value: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    createSecretData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { createSecretData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(createSecretData.params).toEqual(params);
  });
});
