import { Router } from "express";
import carController from "../controllers/carController.js";
import validate from "../middlewares/validate.js";
import carSchema from "../schemas/carSchema.js";

const carRouter = Router();

carRouter.get('/cars', carController.listCars);

carRouter.get('/cars/:id', carController.getCar);

carRouter.post('/cars', validate(carSchema), carController.createCar);

carRouter.put('/cars/:id', validate(carSchema), carController.updateCar);

carRouter.delete('/cars/:id', carController.deleteCar);

export default carRouter;