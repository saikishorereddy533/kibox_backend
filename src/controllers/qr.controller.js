
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
    const { boxId, name, userId } = req.body;

    const box = await qrService.registerBox({
        boxId,
        name,
        userId
    });

    res.json({
        success: true,
        box
    });
};
