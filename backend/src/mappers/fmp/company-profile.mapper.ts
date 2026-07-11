import { CompanyProfile } from "../../domain/financial/company-profile.types.js";

export function mapCompanyProfile(raw: any): CompanyProfile {
  return {
    symbol: raw.symbol,
    companyName: raw.companyName,
    description: raw.description,

    sector: raw.sector,
    industry: raw.industry,

    ceo: raw.ceo,

    country: raw.country,
    exchange: raw.exchange,
    currency: raw.currency,

    website: raw.website,

    marketCap: raw.marketCap,

    employees: Number(raw.fullTimeEmployees ?? 0),

    isActivelyTrading: raw.isActivelyTrading,
  };
}