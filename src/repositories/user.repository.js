import User from "../models/User.model.js";

export const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

export const createUser = async (userData) => {
  const user = new User(userData);
  return user.save();
};
