import boxRepository from "../repositories/box.repository.js";
import { generateBoxId } from "../utils/newBox.token.utils.js";

class BoxService {
    async manufactureBox(maxWeight) {
        const boxId = generateBoxId();

        const box = await boxRepository.create({
            boxId,
            maxWeight,
        });


        return {
            boxId: box.boxId,
        };
    }

    async registerBox({ boxId, userId, name }) {
        const box = await boxRepository.findByBoxId(boxId);

        if (!box) throw new Error("BOX_NOT_FOUND");
        if (box.assignedTo) throw new Error("BOX_ALREADY_ASSIGNED");

        return boxRepository.assignBox(boxId, userId, name);
    }
}

export default new BoxService();
