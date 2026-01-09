
import qrService from "../services/qr.service.js";

export const manufactureBox = async (req, res) => {
    const result = await qrService.manufactureBox();

    res.status(201).json({
        success: true,
        boxId: result.boxId,
        qrCode: result.qrCode
    });
};

export const registerBox = async (req, res) => {
    const { boxId, token, name } = req.body;

    const box = await qrService.registerBox({
        boxId,
        token,
        name,
        userId: req.user.id
    });

    res.json({
        success: true,
        box
    });
};
