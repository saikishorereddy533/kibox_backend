import DeviceWeight from "../models/DeviceWeight.model.js";

export const upsertDeviceWeight = async (deviceId, weight) => {
    const result = await DeviceWeight.collection.findOneAndUpdate(
        { deviceId },
        {
            $set: { weight, updatedAt: new Date() },
            $setOnInsert: { deviceId },
        },
        {
            upsert: true,
            returnDocument: 'after', // MongoDB native option
            includeResultMetadata: true, 
        }
    ); 
    return result;
};

export const getDeviceWeightById = async (deviceId) => {
  return DeviceWeight.findOne({ deviceId });
};
