import express from "express";
import { getverifed } from "../controllers/auth.js";
var router = express.Router();

router.post("/", getverifed);

export default router;
