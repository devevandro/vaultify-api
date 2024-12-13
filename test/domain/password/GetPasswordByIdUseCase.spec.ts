import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { ErrorMessage } from '../../../src/domain/errors/ErrorMessage';
import {
  GetPasswordByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/password/GetPasswordByIdUseCase';
import { GetPasswordByIdSpy } from '../../provider/spys/password/GetPasswordByIdSpy';

type MakeSut = {
  useCase: GetPasswordByIdUseCase;
  getPasswordByIdData: GetPasswordByIdSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const getPasswordByIdData = new GetPasswordByIdSpy();
  const useCase = new GetPasswordByIdUseCase({
    getPasswordByIdData: getPasswordByIdData,
  });
  const params = {
    userId: faker.database.mongodbObjectId(),
    passwordId: faker.database.mongodbObjectId(),
  };

  return {
    getPasswordByIdData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getPasswordByIdData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getPasswordByIdData.params).toEqual(params);
  });

  test('should throw Password by ID Not found', async () => {
    const { useCase, getPasswordByIdData, params } = makeSut();

    vi.spyOn(getPasswordByIdData, 'getPasswordById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new ErrorMessage({ message: 'PasswordNotFound' }),
    );
  });

  test('Shoud be able get user by ID', async () => {
    const { useCase, params, getPasswordByIdData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getPasswordByIdData.result);
  });
});
