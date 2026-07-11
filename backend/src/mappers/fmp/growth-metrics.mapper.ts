import { GrowthMetric } from "../../domain/financial/growth-metrics.types.js";

interface FmpGrowthMetricResponse {
  date: string;

  revenueGrowth: number;

  grossProfitGrowth: number;

  operatingIncomeGrowth: number;

  netIncomeGrowth: number;

  epsGrowth: number;

  freeCashFlowGrowth: number;

  bookValueGrowth: number;
}

export function mapGrowthMetric(
  metric: FmpGrowthMetricResponse
): GrowthMetric {
  return {
    date: metric.date,

    revenueGrowth: metric.revenueGrowth,

    grossProfitGrowth: metric.grossProfitGrowth,

    operatingIncomeGrowth: metric.operatingIncomeGrowth,

    netIncomeGrowth: metric.netIncomeGrowth,

    epsGrowth: metric.epsGrowth,

    freeCashFlowGrowth: metric.freeCashFlowGrowth,

    bookValueGrowth: metric.bookValueGrowth,
  };
}