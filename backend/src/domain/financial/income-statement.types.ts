export interface IncomeStatement {
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