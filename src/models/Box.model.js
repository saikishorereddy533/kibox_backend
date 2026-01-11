// models/Box.model.js
import mongoose from "mongoose";

const boxSchema = new mongoose.Schema(
    {
        // Identity
        boxId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        model: {
            type: String,
            default: "KIBOX_V1"
        },

        // Manufacturing config
        maxWeight: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            default: ""
        },
        // Runtime state
        currentWeight: Number,
        lastReportedAt: Date,

        // Ownership
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },
        assignedAt: Date,

        // System state
        isActive: {
            type: Boolean,
            default: true
        },
        alertBelowWeight: {
            type: Number,
            default: null // grams
        },
    },
    { timestamps: true }
);

export default mongoose.model("Box", boxSchema);
