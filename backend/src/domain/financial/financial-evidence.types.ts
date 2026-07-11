import { CompanyProfile } from "./company-profile.types.js";
import { IncomeStatement } from "./income-statement.types.js";

export interface FinancialEvidence {
  profile: CompanyProfile;

  incomeStatements: IncomeStatement[];

  // Stage 3.6.3
  financialHealth?: unknown;

  // Stage 3.6.4
  cashFlow?: unknown;

  // Stage 3.6.5
  valuation?: unknown;

  // Stage 3.6.6
  market?: unknown;

  // Stage 3.6.7
  growth?: unknown;

  // Stage 3.6.8
  dividend?: unknown;
}