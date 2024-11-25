import { IUserSchema } from '../../models/user/UserModel';
import { UserEntity } from '../../../../../domain/entities/user/UserEntity';

export class UserMapper {
  static toEntity(user: IUserSchema): UserEntity {
    return {
      userId: user.id,
      email: user.email,
      fullName: user.fullName,
      createdAt: user.createdAt,
      updateAt: user.updatedAt,
    };
  }
}
