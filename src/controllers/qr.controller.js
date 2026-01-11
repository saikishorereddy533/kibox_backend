
import qrService from "../services/qr.service.js";

export const manufactureBox = async (req, res) => {
    const { maxWeight } = req.body;
    const result = await qrService.manufactureBox(maxWeight);

    res.status(201).json({
        success: true,
        boxId: result.boxId,
    });
};

export const registerBox = async (req, res) => {
    try {
        const { boxId, name, userId } = req.body;

        // 1️⃣ Basic request validation
        if (!boxId || !userId) {
            return res.status(400).json({
                success: false,
                message: "boxId and userId are required"
            });
        }

        // 2️⃣ Call service layer
        const box = await qrService.registerBox({
            boxId,
            name,
            userId
        });

        // 3️⃣ Success response
        return res.status(200).json({
            success: true,
            box
        });

    } catch (error) {
        // 4️⃣ Error mapping
        const errorMap = {
            USER_NOT_FOUND: { status: 404, message: "User not found" },
            BOX_NOT_FOUND: { status: 404, message: "Box not found" },
            BOX_ALREADY_ASSIGNED: { status: 409, message: "Box already registered" },
            BOX_ASSIGNMENT_FAILED: { status: 500, message: "Box assignment failed" }
        };

        const mappedError = errorMap[error.message];
        console.log(error.message)
        return res.status(mappedError?.status || 500).json({
            success: false,
            message: mappedError?.message || "Internal server error"
        });
    }
};