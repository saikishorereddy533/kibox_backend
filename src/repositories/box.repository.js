// repositories/box.repository.js
import Box from "../models/Box.model.js";

class BoxRepository {
    async create(data) {
        return Box.create(data);
    }

    async findByBoxId(boxId) {
        return Box.findOne({ boxId });
    }

    async findByDeviceToken(deviceToken) {
        return Box.findOne({ deviceToken });
    }

    async assignBox(boxId, userId, name) {
        return Box.findOneAndUpdate(
            { boxId, assignedTo: null },
            {
                assignedTo: userId,
                assignedAt: new Date(),
                name
            },
            { new: true }
        );
    }


}

export default new BoxRepository();
