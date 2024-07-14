import mongoose from 'mongoose';

const { Schema } = mongoose;

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String
});

export const User = mongoose.model('users', UserSchema);
