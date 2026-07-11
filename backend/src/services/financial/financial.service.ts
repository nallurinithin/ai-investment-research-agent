import {
  getCompanyProfile,
  getIncomeStatements,
  getBalanceSheets,
} from "../../providers/fmp/financial.provider.js";

import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export async function collectFinancialEvidence(
  ticker: string
): Promise<FinancialEvidence> {
  const [
    profile,
    incomeStatements,
    balanceSheets,
  ] = await Promise.all([
    getCompanyProfile(ticker),
    getIncomeStatements(ticker),
    getBalanceSheets(ticker),
  ]);

  return {
    profile,
    incomeStatements,
    balanceSheets,
  };
}