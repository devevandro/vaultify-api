import { ISecretSchema } from '../../models/secret/SecretModel';
import { SecretEntity } from '../../../../../domain/entities/secret/SecretEntity';

export class SecretMapper {
  static toEntity(secret: ISecretSchema): SecretEntity {
    return {
      id: secret.id,
      userId: secret.id,
      name: secret.name,
      value: secret.value,
      description: secret?.descritpion,
      createdAt: secret.createdAt,
      updateAt: secret.updatedAt,
    };
  }
}
