export interface NewsArticle {
  title: string;

  summary: string;

  url: string;

  source: string;

  publishedDate: string;

  relevanceScore: number;
}

export interface NewsEvidence {
  articles: NewsArticle[];
}