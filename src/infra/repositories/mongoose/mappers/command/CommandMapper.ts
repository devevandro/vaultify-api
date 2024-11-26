import { ICommandSchema } from '../../models/command/CommandModel';
import { CommandEntity } from '../../../../../domain/entities/command/CommandEntity';

export class CommandMapper {
  static toEntity(command: ICommandSchema): CommandEntity {
    return {
      id: command.id,
      userId: command.id,
      command: command.command,
      tag: command.tag,
      title: command.title,
      description: command?.descritpion,
      createdAt: command.createdAt,
      updateAt: command.updatedAt,
    };
  }
}
