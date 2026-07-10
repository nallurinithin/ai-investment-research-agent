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

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}