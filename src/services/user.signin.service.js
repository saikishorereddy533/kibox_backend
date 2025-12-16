import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail } from "../repositories/user.repository.js";
import { JWT_SECRET } from "../config/server.config.js";

export const loginUser = async ({ email, password }) => {

  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }


  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, token };
};
