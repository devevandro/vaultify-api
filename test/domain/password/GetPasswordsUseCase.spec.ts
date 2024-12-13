import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { ErrorMessage } from '../../../src/domain/errors/ErrorMessage';
import { GetPasswordsUseCase } from '../../../src/domain/useCases/password/GetPasswordsUseCase';
import { GetPasswordsSpy } from '../../provider/spys/password/GetPasswordsSpy';

type MakeSut = {
  useCase: GetPasswordsUseCase;
  getPasswordsData: GetPasswordsSpy;
  params: string;
};

const makeSut = (): MakeSut => {
  const getPasswordsData = new GetPasswordsSpy();
  const useCase = new GetPasswordsUseCase({
    getPasswordsData,
  });
  const params = faker.database.mongodbObjectId();

  return {
    getPasswordsData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getPasswordsData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getPasswordsData.params).toEqual(params);
  });

  test('should throw Passwords Not found', async () => {
    const { useCase, getPasswordsData, params } = makeSut();

    vi.spyOn(getPasswordsData, 'getPasswords').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new ErrorMessage({ message: 'PasswordsNotFound' }),
    );
  });

  test('Shoud be able get All Passwords', async () => {
    const { useCase, params, getPasswordsData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getPasswordsData.result);
  });
});
