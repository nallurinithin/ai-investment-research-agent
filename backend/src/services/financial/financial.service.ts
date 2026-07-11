import {
  getCompanyProfile,
  getIncomeStatements,
  getBalanceSheets,
  getCashFlowStatements,
  getFinancialRatios,
} from "../../providers/fmp/financial.provider.js";

import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export async function collectFinancialEvidence(
  ticker: string
): Promise<FinancialEvidence> {
  const results = await Promise.allSettled([
    getCompanyProfile(ticker),
    getIncomeStatements(ticker),
    getBalanceSheets(ticker),
    getCashFlowStatements(ticker),
    getFinancialRatios(ticker),
  ]);

  const [
    profileResult,
    incomeStatementsResult,
    balanceSheetsResult,
    cashFlowStatementsResult,
    financialRatiosResult,
  ] = results;

  if (profileResult.status === "rejected") {
    throw new Error("Critical evidence unavailable: Company Profile");
  }

  if (incomeStatementsResult.status === "rejected") {
    throw new Error("Critical evidence unavailable: Income Statements");
  }

  if (balanceSheetsResult.status === "rejected") {
    console.warn("[FinancialService] Balance Sheet unavailable.");
  }

  if (cashFlowStatementsResult.status === "rejected") {
    console.warn("[FinancialService] Cash Flow unavailable.");
  }

  if (financialRatiosResult.status === "rejected") {
    console.warn("[FinancialService] Financial Ratios unavailable.");
  }

  return {
    profile: profileResult.value,

    incomeStatements: incomeStatementsResult.value,

    balanceSheets:
      balanceSheetsResult.status === "fulfilled"
        ? balanceSheetsResult.value
        : [],

    cashFlowStatements:
      cashFlowStatementsResult.status === "fulfilled"
        ? cashFlowStatementsResult.value
        : [],

    financialRatios:
      financialRatiosResult.status === "fulfilled"
        ? financialRatiosResult.value
        : [],
  };
}