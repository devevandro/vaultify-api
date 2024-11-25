import IUseCase from '../../../core/IUseCase';
import { IGetCommandsData } from '../../data/command/IGetCommandsData';
import { CommandEntity } from '../../entities/command/CommandEntity';
import { CommandError } from '../../errors/command/CommandError';

export type ResponseDTO = CommandEntity[];

export class GetUserByEmailUseCase implements IUseCase<string, ResponseDTO> {
  constructor(
    private readonly dependencies: { getCommandsData: IGetCommandsData },
  ) {}

  async execute(userId: string): Promise<ResponseDTO> {
    const { getCommandsData } = this.dependencies;
    const commands = await getCommandsData.getCommands(userId);

    if (!commands) {
      throw new CommandError({ message: 'CommandsNotFound' });
    }

    return commands;
  }
}
