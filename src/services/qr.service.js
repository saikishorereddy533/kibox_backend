import boxRepository from "../repositories/box.repository.js";
import { generateBoxId } from "../utils/newBox.token.utils.js";
import { findById } from "../repositories/user.repository.js";
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
        const userExists = await findById(userId);

        if (!userExists) throw new Error("USER_NOT_FOUND");

        // 2️⃣ Validate box
        const box = await boxRepository.findByBoxId(boxId);
        if (!box) throw new Error("BOX_NOT_FOUND");

        // 3️⃣ Business rule
        if (box.assignedTo) throw new Error("BOX_ALREADY_ASSIGNED");

        // 4️⃣ Assign atomically
        const updatedBox = await boxRepository.assignBox(
            boxId,
            userId,
            name
        );

        // 5️⃣ Extra safety (rare but clean)
        if (!updatedBox) throw new Error("BOX_ASSIGNMENT_FAILED");

        return updatedBox;
    }
}

export default new BoxService();
