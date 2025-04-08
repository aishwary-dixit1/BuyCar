import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import carRouter from "./src/routes/carRoutes.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

connectDB();

const allowedOrigins = [
  'http://localhost:5173',
  'https://buycar-fn8p.onrender.com'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

  
app.use(express.json());

app.use("/api/cars", carRouter);

if(process.env.NODE_ENV==="production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
