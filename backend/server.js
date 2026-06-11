require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./db");          // was: "./config/db" (wrong path)

const authRoutes = require("./routes/authRoutes");
const visitorRoutes = require("./routes/visitorRoutes");
const qrRoutes = require("./routes/qrRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Serve the frontend folder as static files
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/auth", authRoutes);
app.use("/api/visitor", visitorRoutes);
app.use("/api/qr", qrRoutes);

app.get("/test", (req, res) => {
    res.send("Backend Connected ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
