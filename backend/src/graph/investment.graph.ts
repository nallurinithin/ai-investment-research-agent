import { InvestmentRequest } from "../api/validators/investment.validator.js";

export interface GraphResult {
  status: string;
  message: string;
  data: InvestmentRequest;
}

export async function runInvestmentGraph(
  request: InvestmentRequest
): Promise<GraphResult> {
  return {
    status: "success",
    message: "Investment workflow initialized.",
    data: request,
  };
}