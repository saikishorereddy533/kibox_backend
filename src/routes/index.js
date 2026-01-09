import express from "express";
import deviceRoutes from "./v1/device.routes.js";
import authRoutes from "./v1/user.routes.js";
import emailRoutes from "./v1/email.routes.js";
import qrRoutes from "./v1/qr.routes.js";
const router = express.Router();

router.use("/device", deviceRoutes);
router.use("/auth", authRoutes);
router.use("/email", emailRoutes);
router.use("/qr", qrRoutes);

export default router;