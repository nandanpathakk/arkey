import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  keyPart: {
    type: Buffer,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
