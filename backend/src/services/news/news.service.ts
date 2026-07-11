import { searchCompanyNews } from "../../providers/tavily/news.provider.js";

import { NewsEvidence } from "../../domain/news/news.types.js";

export async function collectNewsEvidence(
  company: string
): Promise<NewsEvidence> {
  const articles = await searchCompanyNews(company);

  return {
    articles,
  };
}