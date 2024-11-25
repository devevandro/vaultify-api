import { CommandEntity } from '../../entities/command/CommandEntity';

export type Params = {
  userId: string;
  commandId: string;
};

export type Result = CommandEntity;

export interface IGetCommandByIdData {
  getCommandById(params: Params): Promise<Result>;
}
