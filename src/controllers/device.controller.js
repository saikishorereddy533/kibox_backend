import { updateDeviceWeightService, updateAlertLimitService } from "../services/device.service.js";
import { StatusCodes } from "http-status-codes";
export const updateWeight = async (req, res) => {
  try {
    const { boxId, weight } = req.body;

    const { currentWeight, maxWeight, exceeded } = await updateDeviceWeightService({ boxId, weight });
    //  if exceeed we have to send email alert to user   TODO
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

export const updateAlertLimit = async (req, res) => {
  try {
    const { boxId, alertBelowWeight, userId } = req.body;

    const box = await updateAlertLimitService({
      boxId,
      userId,
      alertBelowWeight
    });

    res.json({ success: true, box });
  } catch (err) {
    const map = {
      INVALID_ALERT_LIMIT: 400,
      BOX_NOT_FOUND: 404,
      UNAUTHORIZED: 403,
      ALERT_LIMIT_TOO_HIGH: 400
    };

    res.status(map[err.message] || 500).json({
      success: false,
      message: err.message
    });
  }
};


