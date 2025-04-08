import express from "express";
const carRouter = express.Router();
import { getCars, getCarById,  createCar } from "../controllers/carControllers.js";

carRouter.get("/", getCars);
carRouter.get("/:id", getCarById);
carRouter.post("/", createCar);

export default carRouter;
