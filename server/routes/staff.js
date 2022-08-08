import express from "express";
import {
  addParcel,
  getAllCourier,
  updateStatus,
  getFilteredCourier,
  searchByParcel,
} from "../controllers/staff.js";
var router = express.Router();

router.post("/searchParcel", searchByParcel);
router.post("/addparcel", addParcel);
router.get("/getallcourier", getAllCourier);
router.patch("/updatestatus", updateStatus);
router.get("/:status", getFilteredCourier);

export default router;
