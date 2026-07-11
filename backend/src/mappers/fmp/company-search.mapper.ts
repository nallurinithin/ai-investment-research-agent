import { CompanyCandidate } from "../../domain/company/company.types.js";

interface FmpCompanySearchResponse {
  symbol: string;
  name: string;
  exchange: string;
  exchangeFullName: string;
  currency: string;
}

export function mapCompanySearchResponse(
  companies: FmpCompanySearchResponse[]
): CompanyCandidate[] {
  return companies.map((company) => ({
    symbol: company.symbol,
    name: company.name,
    exchange: company.exchange,
    exchangeFullName: company.exchangeFullName,
    currency: company.currency,
  }));
} 