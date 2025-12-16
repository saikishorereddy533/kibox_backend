import { upsertDeviceWeight } from "../repositories/deviceWeight.repository.js";

export const updateDeviceWeightService = async ({ deviceId, weight }) => {
  const result = await upsertDeviceWeight(deviceId, weight);
    // console.log(result)
  const isFirstTime = !result?.lastErrorObject?.updatedExisting;

  return {
    isFirstTime,
    data: result.value
  };
};