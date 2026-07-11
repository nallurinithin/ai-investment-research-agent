import { GoogleGenAI } from "@google/genai";
import { env } from "../../infrastructure/config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

export async function generateInvestmentAnalysis(
  prompt: string
): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text ?? "";
}