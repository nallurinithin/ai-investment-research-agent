import express from "express";
import cors from "cors";
import investmentRoutes from "./api/routes/investment.routes.js";
import { errorHandler } from "./api/middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
 
app.use("/api/v1/investment", investmentRoutes);
app.use(errorHandler);


export default app;