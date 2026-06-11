const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
    visitorName:   { type: String, required: true },
    phone:         String,
    vehicleNumber: String,
    arrivalTime:   { type: Date, default: Date.now },
    expiryTime:    Date,
    status:        { type: String, default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("Visitor", visitorSchema);
