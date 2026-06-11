const Visitor = require("../models/Visitor");

// POST /api/visitor
exports.createVisitor = async (req, res) => {
    try {
        const { name, phone, vehicle } = req.body;

        // Map frontend field names → schema field names
        const visitor = await Visitor.create({
            visitorName: name,
            phone,
            vehicleNumber: vehicle,
            arrivalTime: new Date(),
            expiryTime: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours
        });

        res.json(visitor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/visitor
exports.getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find().sort({ arrivalTime: -1 });
        res.json(visitors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
