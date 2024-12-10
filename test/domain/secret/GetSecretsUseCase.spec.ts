import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { ErrorMessage } from '../../../src/domain/errors/ErrorMessage';
import { GetSecretsUseCase } from '../../../src/domain/useCases/secret/GetSecretsUseCase';
import { GetSecretsSpy } from '../../provider/spys/secret/GetSecretsSpy';

type MakeSut = {
  useCase: GetSecretsUseCase;
  getSecretsData: GetSecretsSpy;
  params: string;
};

const makeSut = (): MakeSut => {
  const getSecretsData = new GetSecretsSpy();
  const useCase = new GetSecretsUseCase({
    getSecretsData,
  });
  const params = faker.database.mongodbObjectId();

  return {
    getSecretsData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getSecretsData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getSecretsData.params).toEqual(params);
  });

  test('should throw Secrets Not found', async () => {
    const { useCase, getSecretsData, params } = makeSut();

    vi.spyOn(getSecretsData, 'getSecrets').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new ErrorMessage({ message: 'SecretsNotFound' }),
    );
  });

  test('Shoud be able get All Secrets', async () => {
    const { useCase, params, getSecretsData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getSecretsData.result);
  });
});
