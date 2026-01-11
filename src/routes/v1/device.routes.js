import express from "express";
import { updateWeight } from "../../controllers/device.controller.js";
import { updateAlertLimit } from "../../controllers/device.controller.js";

const router = express.Router();

router.post("/weight", updateWeight);
router.post("/alert", updateAlertLimit);

export default router;