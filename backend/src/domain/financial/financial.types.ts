export interface CompanyProfile {
  symbol: string;
  companyName: string;
  sector: string;
  industry: string;
  country: string;
  exchange: string;
  currency: string;
  website: string;
  description: string;
}

export interface FinancialEvidence {
  profile: CompanyProfile;
}