import { searchCompany } from "../../providers/fmp/fmp.provider.js";
import { CompanyResolution } from "../../domain/company/company-resolution.types.js";

export async function resolveCompany(
  companyName: string
): Promise<CompanyResolution> {
  const companies = await searchCompany(companyName);

  if (companies.length === 0) {
    return {
      status: "COMPANY_NOT_FOUND",
    };
  }

  if (companies.length === 1) {
    return {
      status: "COMPANY_RESOLVED",
      company: companies[0]!,
    };
  }

  return {
    status: "COMPANY_AMBIGUOUS",
    candidates: companies,
  };
}