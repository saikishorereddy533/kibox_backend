import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "../repositories/user.repository.js";
import { JWT_SECRET } from "../config/server.config.js";
const SALT_ROUNDS = 10;

export const registerUser = async ({ name, email, password }) => {
 
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already registered");
  }


  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);


  const user = await createUser({ name, email, password: hashedPassword });

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, token };
};
