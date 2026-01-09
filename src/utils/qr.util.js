import QRCode from "qrcode";

export const generateQr = async ({ boxId, token }) => {
    const url = `https://kibox.app/register?boxId=${boxId}&token=${token}`;

    return QRCode.toDataURL(url); // base64 PNG
};