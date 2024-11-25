export type Params = {
  userId: string;
  commandId: string;
};
export type Result = boolean;

export interface IDeleteCommandByIdData {
  deleteCommandById(params: Params): Promise<boolean>;
}
