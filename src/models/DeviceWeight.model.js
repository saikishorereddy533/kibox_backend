import mongoose from "mongoose";

const deviceWeightSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  weight: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("DeviceWeight", deviceWeightSchema);
