import bcrypt from "bcryptjs";
import { findUserByEmail, createUser } from "../repositories/user.repository.js";
import { generateToken } from "../utils/jwt.utils.js";
const SALT_ROUNDS = 10;

export const registerUser = async ({ name, email, password }) => {
 
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already registered");
  }


  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);


  const user = await createUser({ name, email, password: hashedPassword });

  const token = generateToken({
    userId: user._id, 
    email: user.email
  });


  return { user, token };
};
