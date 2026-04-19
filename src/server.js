const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGINS, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/menu", require("./routers/menuRoutes"));
app.use("/api/reservations", require("./routers/reservationRoutes"));
app.use("/api/contact", require("./routers/contactRoutes"));
app.use("/api/testimonials", require("./routers/testimonialRoutes"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Kopi Ruang API is running ☕" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route tidak ditemukan" });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`🚀 Kopi Ruang Backend running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
  console.log(`🌐 Access: http://localhost:${PORT}/api`);
});
