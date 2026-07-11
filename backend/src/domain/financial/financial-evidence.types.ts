import { CompanyProfile } from "./company-profile.types.js";
import { IncomeStatement } from "./income-statement.types.js";
import { BalanceSheet } from "./balance-sheet.types.js";

export interface FinancialEvidence {
  profile: CompanyProfile;

  incomeStatements: IncomeStatement[];

  balanceSheets: BalanceSheet[];

  // Stage 3.6.4
  cashFlowStatements?: unknown;

  // Stage 3.6.5
  financialRatios?: unknown;

  // Stage 3.6.6
  keyMetrics?: unknown;

  // Stage 3.6.7
  enterpriseValue?: unknown;

  // Stage 3.6.8
  growthMetrics?: unknown;

  // Stage 3.6.9
  analystEstimates?: unknown;

  // Stage 3.6.10
  earningsHistory?: unknown;

  // Stage 3.6.11
  dividendHistory?: unknown;

  // Stage 3.6.12
  historicalPriceSummary?: unknown;
}