import Courier from "../models/courier.js";
import mongoose from "mongoose";

export const addParcel = async (req, res) => {
  const courierDetails = req.body;
  const courier = new Courier(courierDetails);
  try {
    await courier.save();
    res.status(201).json({ ...courier, saved: true });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getAllCourier = async (req, res) => {
  try {
    const courier = await Courier.find().sort({ orderOn: -1 });
    res.status(200).json(courier);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updateStatus = async (req, res) => {
  const { id, curStatus } = req.body;
  var nextStatus;
  if (curStatus === "packed") nextStatus = "shiped";
  else if (curStatus === "shiped") nextStatus = "ofd";
  else if (curStatus === "ofd") nextStatus = "delivered";
  try {
    const courier = await Courier.findByIdAndUpdate(id, {
      status: nextStatus,
    });
    res.status(200).json({ ...courier, updated: true });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getFilteredCourier = async (req, res) => {
  const { status } = req.params;
  try {
    const courier = await Courier.find({ status });
    res.status(200).json(courier);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const searchByParcel = async (req, res) => {
  const { ref } = req.body;
  //checking the id is mongodb id not any random id
  if (!mongoose.Types.ObjectId.isValid(ref))
    return res.status(202).send({ found: false });
  try {
    const courier = await Courier.find({ _id: ref });
    res.status(200).json({ ...courier, found: true });
  } catch (error) {
    res.status(400).json({ error });
  }
};
