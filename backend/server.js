import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import connectDB from "./src/config/db.js";
import carRouter from "./src/routes/carRoutes.js";

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
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


app.use(express.json());


app.use("/api/cars", carRouter);


if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "./frontend/dist");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
