import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { ErrorMessage } from '../../../src/domain/errors/ErrorMessage';
import { DeleteUserByIdUseCase } from '../../../src/domain/useCases/user/DeleteUserByIdUseCase';
import { DeleteUserbyIdSpy } from '../../provider/spys/user/DeleteUserbyIdSpy';
import { GetUserByIdSpy } from '../../provider/spys/user/GetUserByIdSpy';

type SutTypes = {
  useCase: DeleteUserByIdUseCase;
  deleteUserByIdSpy: DeleteUserbyIdSpy;
  getUserByIdSpy: GetUserByIdSpy;
  params: string;
};

const makeSut = (): SutTypes => {
  const deleteUserByIdSpy = new DeleteUserbyIdSpy();
  const getUserByIdSpy = new GetUserByIdSpy();
  const useCase = new DeleteUserByIdUseCase({
    deleteUserByIdData: deleteUserByIdSpy,
    getUserByIdData: getUserByIdSpy,
  });
  const params = faker.database.mongodbObjectId();

  return {
    params,
    useCase,
    deleteUserByIdSpy,
    getUserByIdSpy,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { deleteUserByIdSpy, getUserByIdSpy, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(getUserByIdSpy.params).toEqual(params);
    expect(deleteUserByIdSpy.params).toEqual(params);
  });

  test('Shoul be able call Delete User if Error', async () => {
    const { getUserByIdSpy, useCase, params } = makeSut();
    getUserByIdSpy.result = null;

    vi.spyOn(getUserByIdSpy, 'getUserById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new ErrorMessage({ message: 'UserNotFound' }),
    );
  });
});
