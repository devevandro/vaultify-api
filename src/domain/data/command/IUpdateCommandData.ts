export type Params = {
  id: string;
  userId: string;
  tag?: string;
  command?: string;
  title?: string;
  description?: string;
};

export type Result = boolean;

export interface IUpdateCommandData {
  updateCommand(params: Params): Promise<Result>;
}
