import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "staff",
  },
  phone: String,
  address: String,
  branch: String,
});

const User = mongoose.model("User", userSchema);
export default User;
