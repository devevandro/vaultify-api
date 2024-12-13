import { Schema } from 'mongoose';

type IPasswordSchema = {
  id: string;
  descritpion?: string;
  userId: string;
  urlSite: string;
  login: string;
  password: string;
  updatedAt?: string;
  createdAt?: string;
} & Document;

const PasswordSchema = new Schema(
  {
    descritpion: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    urlSite: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    password: {
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

PasswordSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export { IPasswordSchema, PasswordSchema };
