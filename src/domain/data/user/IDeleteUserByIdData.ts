export type Params = string;
export type Result = boolean;

export interface IDeleteUserByIdData {
  deleteUserById(params: Params): Promise<boolean>;
}
