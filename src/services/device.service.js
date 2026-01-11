import boxRepository from "../repositories/box.repository.js";
import mongoose from "mongoose";

export const updateDeviceWeightService = async ({ boxId, weight }) => {
  if (!boxId || !weight || typeof weight !== "number") {
    throw new Error("INVALID_PAYLOAD");
  }

  const box = await boxRepository.findByBoxId(boxId);
  if (!box) throw new Error("BOX_NOT_FOUND");

  if (!box.assignedTo) throw new Error("BOX_NOT_REGISTERED");

  box.currentWeight = weight;
  box.lastReportedAt = new Date();

  await box.save();

  const exceeded = weight > box.maxWeight;


  return {
    boxId: box.boxId,
    currentWeight: box.currentWeight,
    maxWeight: box.maxWeight,
    exceeded
  };
};

export const updateAlertLimitService = async ({ boxId, userId, alertBelowWeight }) => {
  if (alertBelowWeight <= 0) {
    throw new Error("INVALID_ALERT_LIMIT");
  }

  const box = await boxRepository.findByBoxId(boxId);
  if (!box) throw new Error("BOX_NOT_FOUND");


  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("INVALID_USER_ID");
  }

  if (!box.assignedTo || !box.assignedTo.equals(userId)) {
    throw new Error("UNAUTHORIZED");
  }

  if (alertBelowWeight >= box.maxWeight) {
    throw new Error("ALERT_LIMIT_TOO_HIGH");
  }

  box.alertBelowWeight = alertBelowWeight;
  await box.save();

  return box;
}