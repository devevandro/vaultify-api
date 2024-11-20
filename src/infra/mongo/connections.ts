import mongoose from 'mongoose';
import { ENVIRONMENTS } from '../../constants/ENVIRONMENTS';

mongoose.Promise = global.Promise;

let isConnected: any;

export const connectToDataBase = async (): Promise<void> => {
  if (isConnected) {
    return Promise.resolve();
  }

  return mongoose.connect(ENVIRONMENTS.MONGO_URL || '').then((db: any) => {
    isConnected = db.connections[0].readyState;
  });
};
