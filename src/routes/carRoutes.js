import { Router } from "express";
import carController from "../controllers/carController.js";

const carRouter = Router();

carRouter.get('/cars', carController.listCars);

carRouter.get('/cars/:id', carController.getCar);

carRouter.post('/cars', carController.createCar);

carRouter.put('/cars/:id', carController.updateCar);

carRouter.delete('/cars/:id', carController.deleteCar);

export default carRouter;