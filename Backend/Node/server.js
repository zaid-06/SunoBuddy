// // server.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import authRoutes from "./routes/auth.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use("/api/auth", authRoutes);

// // Root route
// app.get("/", (req, res) => {
//   res.send("SunoBuddy Backend is Running 🚀");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";           // ✅ step 1: import cors
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();

// ✅ step 2: enable CORS (important for frontend-backend connection)
app.use(cors());

// ✅ step 3: to parse incoming JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ connect MongoDB and start server
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected");

    // ✅ mount all routes after DB connection
    app.use("/api/auth", authRoutes);

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

start();
