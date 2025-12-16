import express from "express";
import deviceRoutes from "./v1/device.routes.js";
import signupUser from "./v1/user.routes.js";
const router  = express.Router();

router.use("/device",deviceRoutes);
router.use("/user",signupUser);

export default router;