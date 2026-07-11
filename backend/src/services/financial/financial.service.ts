import {
  getCompanyProfile,
  getIncomeStatements,
} from "../../providers/fmp/financial.provider.js";

import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export async function collectFinancialEvidence(
  ticker: string
): Promise<FinancialEvidence> {
  const [profile, incomeStatements] = await Promise.all([
    getCompanyProfile(ticker),
    getIncomeStatements(ticker),
  ]);

  return {
    profile,
    incomeStatements,
  };
}