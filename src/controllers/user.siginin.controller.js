import { loginUser } from "../services/user.signin.service.js";

export const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const { user, token } = await loginUser({ email, password });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: { user, token }
    });

  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
