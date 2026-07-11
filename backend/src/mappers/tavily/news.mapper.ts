import { NewsArticle } from "../../domain/news/news.types.js";

interface TavilySearchResult {
  title: string;

  content: string;

  url: string;

  score: number;

  published_date?: string;
}

export function mapNewsArticle(
  article: TavilySearchResult
): NewsArticle {
  return {
    title: article.title,

    summary: article.content,

    url: article.url,

    source: new URL(article.url).hostname,

    publishedDate: article.published_date ?? "",

    relevanceScore: article.score,
  };
}