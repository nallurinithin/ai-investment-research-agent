interface NewsArticle {
  title: string;
  summary: string;
  source: string;
  publishedDate: string;
  url: string;
}

interface NewsHighlightsProps {
  articles: NewsArticle[];
}

export default function NewsHighlights({
  articles,
}: NewsHighlightsProps) {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderRadius: "14px",
        padding: "24px",
        marginBottom: "24px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px",
          color: "#0F172A",
        }}
      >
        Recent News
      </h2>

      {articles.length === 0 ? (
        <p
          style={{
            color: "#64748B",
            margin: 0,
          }}
        >
          No recent news available.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {articles.map((article, index) => (
            <article
              key={index}
              style={{
                padding: "18px",
                border: "1px solid #E2E8F0",
                borderRadius: "10px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  marginBottom: "10px",
                  color: "#0F172A",
                  fontSize: "18px",
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  marginBottom: "12px",
                  color: "#475569",
                  lineHeight: 1.7,
                }}
              >
                {article.summary}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                >
                  {article.source} • {article.publishedDate}
                </span>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#2563EB",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}