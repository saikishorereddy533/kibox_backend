import express from "express";
import deviceRoutes from "./v1/device.routes.js"
const router  = express.Router();

router.use("/device",deviceRoutes);

export default router;