import { getCompetitors } from "../../providers/fmp/company.provider.js";

import { Competitor } from "../../domain/competitor/competitor.types.js";

export async function collectCompetitorEvidence(
  ticker: string
): Promise<Competitor[]> {
  return getCompetitors(ticker);
}