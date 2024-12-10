import { Schema } from 'mongoose';

type ISecretSchema = {
  id: string;
  descritpion?: string;
  userId: string;
  name?: string;
  value: string;
  updatedAt?: string;
  createdAt?: string;
} & Document;

const SecretSchema = new Schema(
  {
    descritpion: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
      required: true,
    },
    updated: {
      type: Date,
      default: Date.now,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
);

SecretSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export { ISecretSchema, SecretSchema };
