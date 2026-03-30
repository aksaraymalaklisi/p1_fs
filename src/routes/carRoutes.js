import { Router } from "express";
import carController from "../controllers/carController.js";

const carRouter = Router();

carRouter.get('/cars', carController.listCars);

carRouter.get('/cars/:id', carController.getCar);

export default carRouter;