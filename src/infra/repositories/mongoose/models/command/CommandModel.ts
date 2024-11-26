import { Schema } from 'mongoose';

type ICommandSchema = {
  id: string;
  descritpion?: string;
  userId: string;
  command: string;
  title: string;
  tag: string;
  updatedAt?: string;
  createdAt?: string;
} & Document;

const CommandSchema = new Schema(
  {
    descritpion: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    command: {
      type: String,
      required: true,
    },
    title: {
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

CommandSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export { ICommandSchema, CommandSchema };
