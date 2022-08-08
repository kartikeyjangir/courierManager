import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./routes/admin.js";
import Auth from "./routes/auth.js";
import Staff from "./routes/staff.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/admin", Admin);
app.use("/authme", Auth);
app.use("/staff", Staff);
app.get("/", (req, res) => res.send("Backend working perfectly"));

const PORT = process.env.PORT || 5003;

mongoose
  .connect(process.env.connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`listening at port ${PORT}`)))
  .catch((error) => console.log(error.message));
