import axios, { AxiosInstance } from 'axios';

export abstract class UserBaseApi {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: '',
    });
  }
}
