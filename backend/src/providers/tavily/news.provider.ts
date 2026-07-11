import axios from "axios";

import { env } from "../../infrastructure/config/env.js";

import { NewsArticle } from "../../domain/news/news.types.js";

import { mapNewsArticle } from "../../mappers/tavily/news.mapper.js";

interface TavilySearchResult {
  title: string;

  content: string;

  url: string;

  score: number;

  published_date?: string;
}

interface TavilyResponse {
  results: TavilySearchResult[];
}

export async function searchCompanyNews(
  company: string
): Promise<NewsArticle[]> {
  const response = await axios.post<TavilyResponse>(
    "https://api.tavily.com/search",
    {
      api_key: env.TAVILY_API_KEY,

      query: `${company} latest financial news`,

      topic: "news",

      search_depth: "advanced",

      max_results: 10,
    }
  );

  return response.data.results.map(mapNewsArticle);
}