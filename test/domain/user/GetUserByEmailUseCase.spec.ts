import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { GetUserError } from '../../../src/domain/errors/user/GetUserError';
import {
  GetUserByEmailUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/user/GetUserByEmailUseCase';
import { GetUserByEmailSpy } from '../../provider/spys/user/GetUserByEmailSpy';

type MakeSut = {
  useCase: GetUserByEmailUseCase;
  getUserByEmailSpy: GetUserByEmailSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const getUserByEmailSpy = new GetUserByEmailSpy();
  const useCase = new GetUserByEmailUseCase({
    getUserByEmailData: getUserByEmailSpy,
  });
  const params = faker.database.mongodbObjectId();

  return {
    getUserByEmailSpy,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getUserByEmailSpy, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getUserByEmailSpy.params).toEqual(params);
  });

  test('should throw user Not found', async () => {
    const { useCase, getUserByEmailSpy, params } = makeSut();

    vi.spyOn(getUserByEmailSpy, 'getUserByEmail').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new GetUserError({ message: 'UserNotFound' }),
    );
  });

  test('Shoud be able get user by Email', async () => {
    const { useCase, params, getUserByEmailSpy } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getUserByEmailSpy.result);
  });
});
