import { resetPasswordService } from "../services/resetPassword.service.js";
import logger from "../utils/logger.js";
import { StatusCodes } from "http-status-codes";

export const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    if (!resetToken || !newPassword) {
      logger.warn("Reset password failed: missing resetToken or newPassword");
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Reset token and new password are required" });
    }

    await resetPasswordService({ resetToken, newPassword });
    logger.info("Password reset successful");

    return res
      .status(StatusCodes.OK)
      .json({ message: "Password reset successful" });

  } catch (err) {
    logger.error(`Password reset failed: ${err.message}`);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.message });
  }
};
