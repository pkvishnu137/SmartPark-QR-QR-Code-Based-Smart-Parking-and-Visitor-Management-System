const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
    slotNumber: { type: String, required: true, unique: true },
    status:     { type: String, default: "Available" }
}, { timestamps: true });

module.exports = mongoose.model("ParkingSlot", slotSchema);
