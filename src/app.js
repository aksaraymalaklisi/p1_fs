import express from "express";
import router from "./routes/index.js";
import logger from "./middlewares/logger.js";

const app = express();

// JSON middleware
app.use(express.json());

// Logger middleware
app.use(logger);

// Router
app.use(router);

export default app;