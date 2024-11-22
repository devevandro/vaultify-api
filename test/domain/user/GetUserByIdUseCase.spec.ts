import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { UserError } from '../../../src/domain/errors/user/UserError';
import {
  GetUserByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/GetUserByIdUseCase';
import { GetUserByIdSpy } from '../../provider/spys/user/GetUserByIdSpy';

type MakeSut = {
  useCase: GetUserByIdUseCase;
  getUserByIdSpy: GetUserByIdSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const getUserByIdSpy = new GetUserByIdSpy();
  const useCase = new GetUserByIdUseCase({ getUserByIdData: getUserByIdSpy });
  const params = faker.database.mongodbObjectId();

  return {
    getUserByIdSpy,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getUserByIdSpy, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getUserByIdSpy.params).toEqual(params);
  });

  test('should throw user Not found', async () => {
    const { useCase, getUserByIdSpy, params } = makeSut();

    vi.spyOn(getUserByIdSpy, 'getUserById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(new UserError({ message: 'UserNotFound' }));
  });

  test('Shoud be able get user by ID', async () => {
    const { useCase, params, getUserByIdSpy } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getUserByIdSpy.result);
  });
});
