export interface CompanyProfile {
  symbol: string;
  companyName: string;
  description: string;

  sector: string;
  industry: string;

  ceo: string;

  country: string;
  exchange: string;
  currency: string;

  website: string;

  marketCap: number;

  employees: number;

  isActivelyTrading: boolean;
}