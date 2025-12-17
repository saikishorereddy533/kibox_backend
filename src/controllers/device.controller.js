import { updateDeviceWeightService } from "../services/device.service.js";
import { StatusCodes } from "http-status-codes";
export const updateWeight = async (req, res) => {
  try {
    const { deviceId, weight } = req.body;

    const { isFirstTime, data } =
    await updateDeviceWeightService({ deviceId, weight });
    res.status(isFirstTime ? 201 : 200).json({
      success: true,
      message: isFirstTime
        ? "Device registered and weight stored"
        : "Weight updated successfully",
      data
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: err.message });
  }
};
