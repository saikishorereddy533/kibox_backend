import boxRepository from "../repositories/box.repository.js";
import { generateBoxId, generateDeviceToken } from "../newBox/token.util.js";
import { generateQr } from "../utils/qr.util.js";

class BoxService {
    async manufactureBox() {
        const boxId = generateBoxId();
        const deviceToken = generateDeviceToken();

        const box = await boxRepository.create({
            boxId,
            deviceToken
        });

        const qrCode = await generateQr({
            boxId: box.boxId,
            token: deviceToken
        });

        return {
            boxId: box.boxId,
            deviceToken,
            qrCode // base64 → printable
        };
    }

    async registerBox({ boxId, token, userId, name }) {
        const box = await boxRepository.findByBoxId(boxId);

        if (!box) throw new Error("BOX_NOT_FOUND");
        if (box.deviceToken !== token) throw new Error("INVALID_TOKEN");
        if (box.assignedTo) throw new Error("BOX_ALREADY_ASSIGNED");

        return boxRepository.assignBox(boxId, userId, name);
    }
}

export default new BoxService();
