import mongoose from "mongoose";

const deviceLimitSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
    unique: true,   // each device has only one limit
    index: true
  },
  maxWeight: {
    type: Number,
    required: true   // e.g., 1 for 5KG box, 0.2 for 1KG box
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("DeviceLimit", deviceLimitSchema);
