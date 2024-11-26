import { connection, mongo } from 'mongoose';

import * as GetCommandByIdData from '../../../../../domain/data/command/IGetCommandByIdData';
import * as GetCommandsData from '../../../../../domain/data/command/IGetCommandsData';
import * as CreateCommandData from '../../../../../domain/data/command/ICreateCommandData';
import * as UpdateCommandData from '../../../../../domain/data/command/IUpdateCommandData';
import * as DeleteCommandByIdData from '../../../../../domain/data/command/IDeleteCommandByIdData';
import {
  ICommandSchema,
  CommandSchema,
} from '../../models/command/CommandModel';
import { CommandMapper } from '../../mappers/command/CommandMapper';

export class MongoCommandRepository
  implements
    GetCommandsData.IGetCommandsData,
    GetCommandByIdData.IGetCommandByIdData,
    CreateCommandData.ICreateCommandData,
    DeleteCommandByIdData.IDeleteCommandByIdData,
    UpdateCommandData.IUpdateCommandData
{
  private commandModel = connection.model<ICommandSchema>(
    'commands',
    CommandSchema,
  );

  async getCommands(
    userId: GetCommandsData.Params,
  ): Promise<GetCommandsData.Result> {
    const userMongoId = new mongo.ObjectId(userId);
    const commands = await this.commandModel.find({ userId: userMongoId });

    return commands.length > 0
      ? commands.map(command => CommandMapper.toEntity(command))
      : null;
  }

  async getCommandById({
    userId,
    commandId,
  }: GetCommandByIdData.Params): Promise<GetCommandByIdData.Result> {
    const commandById = await this.commandModel.findOne({ userId, commandId });

    return commandById ? CommandMapper.toEntity(commandById) : null;
  }

  async createCommand(
    params: CreateCommandData.Params,
  ): Promise<CreateCommandData.Result> {
    const commandCreatred = await this.commandModel.create(params);
    return commandCreatred ? CommandMapper.toEntity(commandCreatred) : null;
  }

  async deleteCommandById({
    userId,
    commandId,
  }: DeleteCommandByIdData.Params): Promise<DeleteCommandByIdData.Result> {
    await this.commandModel.deleteOne({ _id: userId, commandId });
    return true;
  }

  async updateCommand(
    params: UpdateCommandData.Params,
  ): Promise<UpdateCommandData.Result> {
    const commandUpdated = await this.commandModel.updateOne(
      { userId: params?.userId, command: params.id },
      params,
    );
    return !!commandUpdated;
  }
}
