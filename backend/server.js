require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const playgroundRoutes = require("./routes/playgroundRoutes");
const careerRoutes = require("./routes/careerRoutes");

const app = express();
app.set("trust proxy", true);
const server = http.createServer(app);

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:4200",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Session Configuration
const isProduction = process.env.NODE_ENV === "production";

if (isProduction && !process.env.JWT_SECRET) {
  console.error("CRITICAL: JWT_SECRET environment variable is missing in production!");
  process.exit(1);
}

app.use(
  session({
    secret: process.env.JWT_SECRET || "entropy_secret_2026",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        process.env.MONGO_URI || "mongodb://localhost:27017/entropyinfotech",
      collectionName: "sessions",
    }),
    cookie: {
      secure: isProduction, // Set to true if using HTTPS
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax", // Required for cross-site cookies in production
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
    proxy: isProduction, // Trust proxy if behind a load balancer (like on Render/Railway)
  }),
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/playground", playgroundRoutes);
app.use("/api/careers", careerRoutes);

// Socket.io Configuration
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  }
});

io.on("connection", (socket) => {
  console.log("A user connected to Live Chat:", socket.id);

  // Broadcast the total number of connected clients
  io.emit("user_count_update", io.engine.clientsCount);

  socket.on("chat_message", (data) => {
    // Broadcast message to everyone, including sender
    io.emit("chat_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected from Live Chat:", socket.id);
    // Broadcast the total number of connected clients after disconnect
    io.emit("user_count_update", io.engine.clientsCount);
  });
});

// Connect to DB and Start Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
