export type Params = {
  id: string;
  userId: string;
  value?: string;
  name?: string;
  description?: string;
};

export type Result = boolean;

export interface IUpdateSecretData {
  updateSecret(params: Params): Promise<Result>;
}
