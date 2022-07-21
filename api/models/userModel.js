import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    role: String,
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

export default User;
