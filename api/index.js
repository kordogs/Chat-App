const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const socketIoInitializer = require("./routes/socket");
dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(cookieParser());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.error(error);
  }
};

connectDB();

// Import and use route files
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const conversationsRoutes = require("./routes/conversations");
const messagesRoutes = require("./routes/messages");

app.use("/", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/conversations", conversationsRoutes);
app.use("/api/messages", messagesRoutes);

// Initialize socket.io
socketIoInitializer(server);

server.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
