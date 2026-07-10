import { z } from "zod";

export const investmentRequestSchema = z.object({
  company: z
    .string()
    .trim()
    .min(1, "Company name is required"),
});

export type InvestmentRequest = z.infer<typeof investmentRequestSchema>;

export function validateInvestmentRequest(data: unknown): InvestmentRequest {
  return investmentRequestSchema.parse(data);
}