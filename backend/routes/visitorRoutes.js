const express = require("express");
const router = express.Router();
const visitor = require("../controllers/visitorController");

router.post("/", visitor.createVisitor);
router.get("/", visitor.getAllVisitors);   // was missing — needed by dashboard

module.exports = router;
