export type Params = {
  id: string;
  userId: string;
  urlSite?: string;
  login?: string;
  password?: string;
  description?: string;
};

export type Result = boolean;

export interface IUpdatePasswordData {
  updatePassword(params: Params): Promise<Result>;
}
