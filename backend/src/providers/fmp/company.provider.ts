import axios from "axios";
import { env } from "../../infrastructure/config/env.js";
import { mapCompanySearchResponse } from "../../mappers/fmp/company-search.mapper.js";
import { CompanyCandidate } from "../../domain/company/company.types.js";

const fmpClient = axios.create({
  baseURL: env.FMP_BASE_URL,
  timeout: 10000,
  headers: {
    apikey: env.FMP_API_KEY,
  },
});

export async function searchCompany(
  company: string
): Promise<CompanyCandidate[]> {
  const response = await fmpClient.get("/search-name", {
    params: {
      query: company,
      limit: 5,
    },
  });

  return mapCompanySearchResponse(response.data);
}