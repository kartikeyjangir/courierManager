import Branch from "../models/branch.js";
import Staff from "../models/staff.js";
import mongoose from "mongoose";

// Add Staff
export const addStaff = async (req, res) => {
  const user = req.body;
  const newStaff = new Staff(user);
  try {
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get All Staff
export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find({ role: "staff" });
    res.status(200).json(staff);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get Single Staff
export const getSingleStaff = async (req, res) => {
  const uid = req.body.uid;
  //checking the id is mongodb id not any random id
  if (!mongoose.Types.ObjectId.isValid(uid))
    return res.status(202).send({ found: false });
  try {
    const staff = await Staff.findOne({ _id: uid });
    res.status(200).json({ ...staff, found: true });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update staff :: NOTE =>do the validation as well
export const updateStaff = async (req, res) => {
  const _id = req.body._id;
  const staffDetails = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(202).send({ found: false });

  const updateStaffDetails = await Staff.findByIdAndUpdate(
    _id,
    { ...staffDetails, _id },
    { new: true }
  );

  res.status(200).json({ ...updateStaffDetails, found: true });
};

export const addBranch = async (req, res) => {
  const data = req.body;
  const newBranch = new Branch(data);
  try {
    await newBranch.save();
    res.status(201).json(newBranch);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getBranch = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
