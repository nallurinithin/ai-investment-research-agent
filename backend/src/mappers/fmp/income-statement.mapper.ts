import { IncomeStatement } from "../../domain/financial/income-statement.types.js";

interface FmpIncomeStatementResponse {
  date: string;

  revenue: number;

  costOfRevenue: number;

  grossProfit: number;

  grossProfitRatio: number;

  operatingExpenses: number;

  operatingIncome: number;

  operatingIncomeRatio: number;

  netIncome: number;

  netIncomeRatio: number;

  eps: number;

  epsDiluted: number;
}

export function mapIncomeStatement(
  statement: FmpIncomeStatementResponse
): IncomeStatement {
  return {
    date: statement.date,

    revenue: statement.revenue,

    costOfRevenue: statement.costOfRevenue,

    grossProfit: statement.grossProfit,

    grossProfitRatio: statement.grossProfitRatio,

    operatingExpenses: statement.operatingExpenses,

    operatingIncome: statement.operatingIncome,

    operatingIncomeRatio: statement.operatingIncomeRatio,

    netIncome: statement.netIncome,

    netIncomeRatio: statement.netIncomeRatio,

    eps: statement.eps,

    epsDiluted: statement.epsDiluted,
  };
}