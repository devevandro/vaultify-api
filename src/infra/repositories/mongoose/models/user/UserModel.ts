import { Schema } from 'mongoose';

type IUserSchema = {
  id: string;
  email: string;
  fullName: string;
  salt?: string;
  updatedAt?: string;
  createdAt?: string;
} & Document;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    salt: {
      type: String,
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

UserSchema.set('toJSON', {
  transform(__: any, ret: any) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export { IUserSchema, UserSchema };
