import express from "express";
import { updateWeight } from "../../controllers/device.controller.js";

const router = express.Router();

router.post("/weight", updateWeight);

export default router;