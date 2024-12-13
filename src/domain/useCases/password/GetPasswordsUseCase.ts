import IUseCase from '../../../core/IUseCase';
import { IGetPasswordsData } from '../../data/password/IGetPasswordsData';
import { PasswordEntity } from '../../entities/password/PasswordEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type ResponseDTO = PasswordEntity[];

export class GetPasswordsUseCase implements IUseCase<string, ResponseDTO> {
  constructor(
    private readonly dependencies: { getPasswordsData: IGetPasswordsData },
  ) {}

  async execute(userId: string): Promise<ResponseDTO> {
    const { getPasswordsData } = this.dependencies;
    const Passwords = await getPasswordsData.getPasswords(userId);

    if (!Passwords) {
      throw new ErrorMessage({ message: 'PasswordsNotFound' });
    }

    return Passwords;
  }
}
