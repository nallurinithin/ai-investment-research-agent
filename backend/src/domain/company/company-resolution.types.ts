import { CompanyCandidate } from "./company.types.js";

export type CompanyResolution =
  | {
      status: "COMPANY_NOT_FOUND";
    }
  | {
      status: "COMPANY_RESOLVED";
      company: CompanyCandidate;
    }
  | {
      status: "COMPANY_AMBIGUOUS";
      candidates: CompanyCandidate[];
    };