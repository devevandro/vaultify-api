import { CommandEntity } from '../../entities/command/CommandEntity';

export type Params = {
  userId: string;
  tag: string;
  command: string;
  title: string;
  description?: string;
};

export type Result = CommandEntity;

export interface ICreateCommandData {
  createCommand(params: Params): Promise<Result>;
}
