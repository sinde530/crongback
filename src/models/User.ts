import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  passwordCheck: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
