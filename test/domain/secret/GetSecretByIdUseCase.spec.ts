import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { ErrorMessage } from '../../../src/domain/errors/ErrorMessage';
import {
  GetSecretByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/secret/GetSecretByIdUseCase';
import { GetSecretByIdSpy } from '../../provider/spys/secret/GetSecretByIdSpy';

type MakeSut = {
  useCase: GetSecretByIdUseCase;
  getSecretByIdData: GetSecretByIdSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const getSecretByIdData = new GetSecretByIdSpy();
  const useCase = new GetSecretByIdUseCase({
    getSecretByIdData: getSecretByIdData,
  });
  const params = {
    userId: faker.database.mongodbObjectId(),
    secretId: faker.database.mongodbObjectId(),
  };

  return {
    getSecretByIdData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getSecretByIdData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getSecretByIdData.params).toEqual(params);
  });

  test('should throw Secret by ID Not found', async () => {
    const { useCase, getSecretByIdData, params } = makeSut();

    vi.spyOn(getSecretByIdData, 'getSecretById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new ErrorMessage({ message: 'SecretNotFound' }),
    );
  });

  test('Shoud be able get user by ID', async () => {
    const { useCase, params, getSecretByIdData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getSecretByIdData.result);
  });
});
