import { CompanyProfile } from "./company-profile.types.js";
import { IncomeStatement } from "./income-statement.types.js";
import { BalanceSheet } from "./balance-sheet.types.js";
import { CashFlowStatement } from "./cash-flow-statement.types.js";
import { FinancialRatio } from "./financial-ratio.types.js";
import { GrowthMetric } from "./growth-metrics.types.js";

export interface FinancialEvidence {
  profile: CompanyProfile;

  incomeStatements: IncomeStatement[];

  balanceSheets: BalanceSheet[];

  cashFlowStatements: CashFlowStatement[];

  financialRatios: FinancialRatio[];

  growthMetrics: GrowthMetric[];

  analystEstimates?: unknown;

  dividendHistory?: unknown;

  historicalPriceSummary?: unknown;
}