import { Competitor } from "../../domain/competitor/competitor.types.js";

interface FmpCompetitorResponse {
  symbol: string;

  companyName: string;

  price: number;

  mktCap: number;
}

export function mapCompetitor(
  competitor: FmpCompetitorResponse
): Competitor {
  return {
    symbol: competitor.symbol,

    companyName: competitor.companyName,

    price: competitor.price,

    marketCap: competitor.mktCap,
  };
}