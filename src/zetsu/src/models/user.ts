import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
});

export const User = model('User', UserSchema);
