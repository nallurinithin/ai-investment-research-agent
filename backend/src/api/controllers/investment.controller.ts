import { Request, Response, NextFunction } from "express";
import { validateInvestmentRequest } from "../validators/investment.validator.js";
import { runInvestmentGraph } from "../../graph/investment.graph.js";

export async function researchCompany(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const request = validateInvestmentRequest(req.body);

    const result = await runInvestmentGraph(request);

    switch (result.status) {
      case "error":
        res.status(404).json(result);
        return;

      case "ambiguity":
        res.status(409).json(result);
        return;

      case "success":
        res.status(200).json(result);
        return;

      default:
        res.status(500).json({
          status: "error",
          message: "Unexpected graph response.",
        });
        return;
    }
  } catch (error) {
    next(error);
  }
}