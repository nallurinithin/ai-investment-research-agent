import { searchCompanyNews } from "../../providers/tavily/news.provider.js";

import {
  NewsArticle,
  NewsEvidence,
} from "../../domain/news/news.types.js";

export async function collectNewsEvidence(
  company: string
): Promise<NewsEvidence> {
  const articles =
    await searchCompanyNews(company);

  const uniqueArticles = removeDuplicateArticles(
    articles
  );

  const topArticles = uniqueArticles
    .sort(
      (a, b) =>
        b.relevanceScore - a.relevanceScore
    )
    .slice(0, 3);

  return {
    articles: topArticles,
  };
}

function removeDuplicateArticles(
  articles: NewsArticle[]
): NewsArticle[] {
  const seen = new Set<string>();

  return articles.filter((article) => {
    const key = article.title
      .trim()
      .toLowerCase();

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}