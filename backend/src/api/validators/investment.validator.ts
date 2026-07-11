import { z } from "zod";

export const investmentRequestSchema = z
  .object({
    company: z.string().trim().min(1).optional(),
    ticker: z.string().trim().min(1).optional(),
  })
  .refine(
    (data) => {
      return !!data.company || !!data.ticker;
    },
    {
      message: "Either company or ticker must be provided.",
      path: ["company"],
    }
  );

export type InvestmentRequest = z.infer<typeof investmentRequestSchema>;

export function validateInvestmentRequest(
  data: unknown
): InvestmentRequest {
  return investmentRequestSchema.parse(data);
}