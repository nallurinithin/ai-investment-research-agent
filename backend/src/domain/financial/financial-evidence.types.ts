import { CompanyProfile } from "./company-profile.types.js";

export interface FinancialEvidence {
  profile: CompanyProfile;

  // Stage 3.6.2
  profitability?: unknown;

  // Stage 3.6.3
  financialHealth?: unknown;

  // Stage 3.6.4
  cashFlow?: unknown;

  // Stage 3.6.5
  growth?: unknown;

  // Stage 3.6.6
  valuation?: unknown;

  // Stage 3.6.7
  market?: unknown;

  // Stage 3.6.8
  dividend?: unknown;
}