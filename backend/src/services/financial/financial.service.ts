import {
  getCompanyProfile,
  getIncomeStatements,
  getBalanceSheets,
  getCashFlowStatements,
} from "../../providers/fmp/financial.provider.js";

import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export async function collectFinancialEvidence(
  ticker: string
): Promise<FinancialEvidence> {
  const [
    profile,
    incomeStatements,
    balanceSheets,
    cashFlowStatements,
  ] = await Promise.all([
    getCompanyProfile(ticker),
    getIncomeStatements(ticker),
    getBalanceSheets(ticker),
    getCashFlowStatements(ticker),
  ]);

  return {
    profile,
    incomeStatements,
    balanceSheets,
    cashFlowStatements,
  };
}