import boxRepository from "../repositories/box.repository.js";

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