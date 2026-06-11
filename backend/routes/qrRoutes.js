const express = require("express");
const router = express.Router();
const qr = require("../controllers/qrController");

router.post("/generate", qr.generateQR);

module.exports = router;
