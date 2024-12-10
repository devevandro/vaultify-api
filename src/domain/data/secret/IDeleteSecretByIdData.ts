export type Params = {
  userId: string;
  secretId: string;
};
export type Result = boolean;

export interface IDeleteSecretByIdData {
  deleteSecretById(params: Params): Promise<boolean>;
}
