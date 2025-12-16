import express from "express";
import { signupUser } from "../../controllers/user.signup.controller.js";
import { signinUser } from "../../controllers/user.siginin.controller.js";
const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);

export default router;