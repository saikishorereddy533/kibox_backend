import { registerUser } from "../services/user.signup.service.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Mail, username, password fields are required" });
    }

    const { user, token } = await registerUser({ name, email, password });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { user, token }
    });

  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
