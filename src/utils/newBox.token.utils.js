// utils/token.util.js
import crypto from "crypto";

export const generateDeviceToken = () =>
    crypto.randomBytes(32).toString("hex");

export const generateBoxId = () =>
    "BOX-" + crypto.randomBytes(4).toString("hex");
