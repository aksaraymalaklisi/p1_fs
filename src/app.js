import express from "express";
import userRouter from "./routes/userRoutes.js";
import carRouter from "./routes/carRoutes.js";
import logger from "./middlewares/logger.js";

const app = express();

// JSON middleware
app.use(express.json());

// Logger middleware
app.use(logger);

// User Router
app.use(userRouter);

// Car Router
app.use(carRouter);

export default app;