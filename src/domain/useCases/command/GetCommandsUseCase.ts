import IUseCase from '../../../core/IUseCase';
import { IGetCommandsData } from '../../data/command/IGetCommandsData';
import { CommandEntity } from '../../entities/command/CommandEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type ResponseDTO = CommandEntity[];

export class GetCommandsUseCase implements IUseCase<string, ResponseDTO> {
  constructor(
    private readonly dependencies: { getCommandsData: IGetCommandsData },
  ) {}

  async execute(userId: string): Promise<ResponseDTO> {
    const { getCommandsData } = this.dependencies;
    const commands = await getCommandsData.getCommands(userId);

    if (!commands) {
      throw new ErrorMessage({ message: 'CommandsNotFound' });
    }

    return commands;
  }
}
