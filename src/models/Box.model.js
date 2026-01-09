import mongoose from "mongoose";

const boxSchema = new mongoose.Schema(
    {
        boxId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        name: {
            type: String // user given name like "Rice Box"
        },

        model: {
            type: String,
            default: "KIBOX_V1"
        },

        // Permanent token stored in device & QR
        deviceToken: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        // Ownership
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        assignedAt: {
            type: Date
        },
    },
    { timestamps: true }
);

export default mongoose.model("Box", boxSchema);
