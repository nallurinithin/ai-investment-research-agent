import axios from "axios";

import {
  researchCompany as researchCompanyApi,
  researchCompanyByTicker as researchCompanyByTickerApi,
} from "../api/investment.api";

import { mapInvestmentResponse } from "../utils/investment.mapper";

import type { InvestmentEvidence } from "../types/investment";
import type { InvestmentAnalysis } from "../types/analysis";

export async function researchCompany(
  company: string
) {
  const response =
    await researchCompanyApi(company);

  return mapInvestmentResponse(response);
}

export async function researchCompanyByTicker(
  ticker: string
) {
  const response =
    await researchCompanyByTickerApi(
      ticker
    );

  return mapInvestmentResponse(response);
}

export async function downloadPdfReport(
  financialEvidence: InvestmentEvidence,
  investmentAnalysis: InvestmentAnalysis
): Promise<void> {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/report/pdf`,
    {
      financialEvidence,
      investmentAnalysis,
    },
    {
      responseType: "blob",
    }
  );

  const blob = new Blob(
    [response.data],
    {
      type: "application/pdf",
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download = `${financialEvidence.profile.symbol}-Investment-Report.pdf`;

  document.body.appendChild(link);

  link.click();

  link.remove();

  window.URL.revokeObjectURL(url);
}