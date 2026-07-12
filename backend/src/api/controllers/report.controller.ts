import { Request, Response } from "express";

import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

import { generatePdf } from "../../services/report/pdf.service.js";

interface PdfRequestBody {
  financialEvidence: FinancialEvidence;
  investmentAnalysis: InvestmentAnalysis;
}

export async function generatePdfReport(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {
      financialEvidence,
      investmentAnalysis,
    } = req.body as PdfRequestBody;

    const pdf = await generatePdf(
      financialEvidence,
      investmentAnalysis
    );

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${financialEvidence.profile.symbol}-Investment-Report.pdf"`
    );

    res.send(pdf);
  } catch {
    res.status(500).json({
      status: "error",
      message:
        "Failed to generate PDF report.",
    });
  }
}