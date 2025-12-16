import express from "express";
import deviceRoutes from "./v1/device.routes.js";
import authRoutes from "./v1/user.routes.js";
const router  = express.Router();

router.use("/device",deviceRoutes);
router.use("/auth",authRoutes);

export default router;