import { Schema } from 'mongoose';

type IFavoriteSchema = {
  id: string;
  descritpion?: string;
  userId: string;
  name?: string;
  url: string;
  updatedAt?: string;
  createdAt?: string;
} & Document;

const FavoriteSchema = new Schema(
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
    url: {
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

FavoriteSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export { IFavoriteSchema, FavoriteSchema };
