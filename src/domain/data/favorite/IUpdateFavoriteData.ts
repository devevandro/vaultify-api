export type Params = {
  id: string;
  userId: string;
  url?: string;
  name?: string;
  description?: string;
};

export type Result = boolean;

export interface IUpdateFavoriteData {
  updateFavorite(params: Params): Promise<Result>;
}
