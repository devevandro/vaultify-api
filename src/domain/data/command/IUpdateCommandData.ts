export type Params = {
  userId: string;
  tag?: string;
  command?: string;
  title?: string;
  description?: string;
};

export type Result = boolean;

export interface IUpdateCommandData {
  createCommand(params: Params): Promise<Result>;
}
