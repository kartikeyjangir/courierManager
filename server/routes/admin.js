import express from "express";
import {
  addStaff,
  addBranch,
  getBranch,
  getStaff,
  getSingleStaff,
  updateStaff,
} from "../controllers/admin.js";
var router = express.Router();

router.post("/addbranch", addBranch);
router.patch("/updatestaff", updateStaff);
router.post("/getsinglestaff", getSingleStaff);
router.get("/getstaff", getStaff);
router.get("/managebranch", getBranch);
router.post("/addstaff", addStaff);

export default router;
