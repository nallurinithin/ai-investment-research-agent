import { getCompetitors } from "../../providers/fmp/company.provider.js";

import { Competitor } from "../../domain/competitor/competitor.types.js";

export async function collectCompetitorEvidence(
  ticker: string
): Promise<Competitor[]> {
  const competitors =
    await getCompetitors(ticker);

  return competitors
    .sort(
      (a, b) =>
        b.marketCap - a.marketCap
    )
    .slice(0, 3);
}