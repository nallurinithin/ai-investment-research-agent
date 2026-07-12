import { Router } from "express";

import { generatePdfReport } from "../controllers/report.controller.js";

const router = Router();

router.post(
  "/pdf",
  generatePdfReport
);

export default router;