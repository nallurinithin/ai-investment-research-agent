import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "3000",

  FMP_API_KEY: process.env.FMP_API_KEY || "",

  FMP_BASE_URL:
    process.env.FMP_BASE_URL ||
    "https://financialmodelingprep.com/stable",

  TAVILY_API_KEY: process.env.TAVILY_API_KEY || "",
};