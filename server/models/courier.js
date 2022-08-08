import mongoose from "mongoose";

const courierSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  recaddress: {
    type: String,
    required: true,
  },
  reccity: {
    type: String,
    required: true,
  },
  reccountry: {
    type: String,
    required: true,
  },
  recemail: {
    type: String,
    required: true,
  },
  recname: {
    type: String,
    required: true,
  },
  recphone: {
    type: Number,
    required: true,
  },
  recpin: {
    type: Number,
    required: true,
  },
  recstate: {
    type: String,
    required: true,
  },
  senderaddress: {
    type: String,
    required: true,
  },
  senderbranch: {
    type: String,
    required: true,
  },
  sendercity: {
    type: String,
    required: true,
  },
  sendercountry: {
    type: String,
    required: true,
  },
  senderemail: {
    type: String,
    required: true,
  },
  sendername: {
    type: String,
    required: true,
  },
  senderphone: {
    type: Number,
    required: true,
  },
  senderpin: {
    type: Number,
    required: true,
  },
  senderstate: {
    type: String,
    required: true,
  },
  wt: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "packed",
  },
  orderOn: {
    type: Date,
    default: Date.now,
  },
});

const Courier = mongoose.model("Courier", courierSchema);
export default Courier;
