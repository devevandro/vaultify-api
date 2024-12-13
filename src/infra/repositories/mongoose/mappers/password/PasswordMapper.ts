import { IPasswordSchema } from '../../models/password/PasswordModel';
import { PasswordEntity } from '../../../../../domain/entities/password/PasswordEntity';

export class PasswordMapper {
  static toEntity(password: IPasswordSchema): PasswordEntity {
    return {
      id: password.id,
      userId: password.userId,
      urlSite: password.urlSite,
      password: password.password,
      login: password.login,
      description: password?.descritpion,
      createdAt: password.createdAt,
      updateAt: password.updatedAt,
    };
  }
}
