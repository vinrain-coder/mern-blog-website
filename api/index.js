import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use user routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
