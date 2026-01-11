import { updateDeviceWeightService } from "../services/device.service.js";
import { StatusCodes } from "http-status-codes";
export const updateWeight = async (req, res) => {
  try {
    const { boxId, weight } = req.body;

    const { currentWeight, maxWeight, exceeded } = await updateDeviceWeightService({ boxId, weight });
    res.status(exceeded ? 400 : 200).json({
      success: true,
      message: exceeded ? "Weight exceeded" : "Weight updated successfully",
      data: {
        boxId,
        currentWeight,
        maxWeight,
        exceeded
      }
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: err.message });
  }
};
