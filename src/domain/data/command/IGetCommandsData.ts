import { CommandEntity } from '../../entities/command/CommandEntity';

export type Params = string;
export type Result = CommandEntity[];

export interface IGetCommandsData {
  getCommands(userId: Params): Promise<Result>;
}
