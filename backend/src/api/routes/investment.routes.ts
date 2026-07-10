import { Router } from "express";
import { researchCompany } from "../controllers/investment.controller.js";

const router = Router();

router.post("/research", researchCompany);

export default router;