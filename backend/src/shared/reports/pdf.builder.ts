import PDFDocument from "pdfkit";

import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

export async function buildPdfReport(
  evidence: FinancialEvidence,
  analysis: InvestmentAnalysis
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const document = new PDFDocument({
      margin: 50,
      size: "A4",
    });

    const chunks: Buffer[] = [];

    document.on("data", (chunk) => {
      chunks.push(chunk);
    });

    document.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    document.on("error", reject);

    // ----------------------------------------------------
    // Title
    // ----------------------------------------------------

    document
      .fontSize(24)
      .text("Investment Research Report");

    document
      .moveDown(0.5)
      .fontSize(11)
      .fillColor("gray")
      .text(
        `Generated on ${new Date().toLocaleString()}`
      );

    document.moveDown();

    // ----------------------------------------------------
    // Company
    // ----------------------------------------------------

    heading(document, "Company Overview");

    field(
      document,
      "Company",
      evidence.profile.companyName
    );

    field(
      document,
      "Ticker",
      evidence.profile.symbol
    );

    field(
      document,
      "Sector",
      evidence.profile.sector
    );

    field(
      document,
      "Industry",
      evidence.profile.industry
    );

    field(
      document,
      "CEO",
      evidence.profile.ceo
    );

    field(
      document,
      "Market Cap",
      `$${evidence.profile.marketCap.toLocaleString()}`
    );

    field(
      document,
      "Employees",
      evidence.profile.employees.toLocaleString()
    );

    document.moveDown();

    // ----------------------------------------------------
    // Recommendation
    // ----------------------------------------------------

    heading(document, "Investment Decision");

    field(
      document,
      "Recommendation",
      analysis.recommendation.replaceAll(
        "_",
        " "
      )
    );

    field(
      document,
      "Evidence Completeness",
      `${analysis.evidenceCompleteness}%`
    );

    field(
      document,
      "AI Confidence",
      `${analysis.confidence}%`
    );

    document.moveDown();

    // ----------------------------------------------------
    // Summary
    // ----------------------------------------------------

    heading(document, "Executive Summary");

    paragraph(document, analysis.summary);

    // ----------------------------------------------------
    // Strengths
    // ----------------------------------------------------

    heading(document, "Strengths");

    analysis.strengths.forEach((item) =>
      bullet(document, item)
    );

    document.moveDown();

    // ----------------------------------------------------
    // Risks
    // ----------------------------------------------------

    heading(document, "Risks");

    analysis.risks.forEach((item) =>
      bullet(document, item)
    );

    document.moveDown();

    // ----------------------------------------------------
    // Financial Highlights
    // ----------------------------------------------------

    heading(document, "Financial Snapshot");

    field(
      document,
      "Revenue",
      `${evidence.incomeStatements[0]?.revenue ?? "N/A"}`
    );

    field(
      document,
      "Net Income",
      `${evidence.incomeStatements[0]?.netIncome ?? "N/A"}`
    );

    field(
      document,
      "Operating Cash Flow",
      `${evidence.cashFlowStatements[0]?.operatingCashFlow ?? "N/A"}`
    );

    field(
      document,
      "Current Ratio",
      `${evidence.financialRatios[0]?.currentRatio ?? "N/A"}`
    );

    field(
      document,
      "Return On Equity",
      `${evidence.financialRatios[0]?.returnOnEquity ?? "N/A"}`
    );

    document.moveDown();

    // ----------------------------------------------------
    // Competitors
    // ----------------------------------------------------

    heading(document, "Top Competitors");

    evidence.competitors.forEach((company) =>
      bullet(
        document,
        `${company.companyName} (${company.symbol})`
      )
    );

    document.moveDown();

    // ----------------------------------------------------
    // News
    // ----------------------------------------------------

    heading(document, "Top News");

    evidence.news.articles.forEach((article) =>
      bullet(document, article.title)
    );

    document.moveDown();

    // ----------------------------------------------------
    // Disclaimer
    // ----------------------------------------------------

    heading(document, "Disclaimer");

    paragraph(
      document,
      "This report is generated using publicly available information and AI-assisted analysis. It is intended to support investment research and should not be considered financial advice."
    );

    document.end();
  });
}

function heading(
  document: PDFKit.PDFDocument,
  text: string
) {
  document
    .fillColor("black")
    .fontSize(17)
    .text(text);

  document.moveDown(0.5);
}

function field(
  document: PDFKit.PDFDocument,
  label: string,
  value: string
) {
  document
    .fontSize(11)
    .fillColor("black")
    .text(`${label}: ${value}`);
}

function paragraph(
  document: PDFKit.PDFDocument,
  text: string
) {
  document
    .fontSize(11)
    .fillColor("black")
    .text(text, {
      align: "justify",
    });

  document.moveDown();
}

function bullet(
  document: PDFKit.PDFDocument,
  text: string
) {
  document
    .fontSize(11)
    .text(`• ${text}`);

  document.moveDown(0.2);
}