const QRCode = require("qrcode");

// POST /api/qr/generate
exports.generateQR = async (req, res) => {
    try {
        const qr = await QRCode.toDataURL(JSON.stringify(req.body));
        res.json({ qr });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
