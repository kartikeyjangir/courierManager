import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "staff",
  },
  phone: {
    type: Number,
    required: true,
  },
  address: { type: String, required: true },
  branch: { type: String, required: true },
});

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
