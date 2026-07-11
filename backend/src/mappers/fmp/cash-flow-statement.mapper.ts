import { CashFlowStatement } from "../../domain/financial/cash-flow-statement.types.js";

interface FmpCashFlowStatementResponse {
  date: string;

  operatingCashFlow: number;

  capitalExpenditure: number;

  freeCashFlow: number;

  investmentsInPropertyPlantAndEquipment: number;

  netCashProvidedByOperatingActivities: number;

  netCashUsedForInvestingActivities: number;

  netCashUsedProvidedByFinancingActivities: number;

  netChangeInCash: number;
}

export function mapCashFlowStatement(
  statement: FmpCashFlowStatementResponse
): CashFlowStatement {
  return {
    date: statement.date,

    operatingCashFlow: statement.operatingCashFlow,

    capitalExpenditure: statement.capitalExpenditure,

    freeCashFlow: statement.freeCashFlow,

    investmentsInPropertyPlantAndEquipment:
      statement.investmentsInPropertyPlantAndEquipment,

    netCashProvidedByOperatingActivities:
      statement.netCashProvidedByOperatingActivities,

    netCashUsedForInvestingActivities:
      statement.netCashUsedForInvestingActivities,

    netCashUsedProvidedByFinancingActivities:
      statement.netCashUsedProvidedByFinancingActivities,

    netChangeInCash: statement.netChangeInCash,
  };
}