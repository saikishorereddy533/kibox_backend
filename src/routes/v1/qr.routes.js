import express from "express";
import { manufactureBox, registerBox } from "../../controllers/qr.controller.js";

const router = express.Router();

router.post("/manufactureBox", manufactureBox);
router.post("/registerBox", registerBox);

export default router;