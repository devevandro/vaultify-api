export type Params = {
  userId: string;
  passwordId: string;
};
export type Result = boolean;

export interface IDeletePasswordByIdData {
  deletePasswordById(params: Params): Promise<boolean>;
}
