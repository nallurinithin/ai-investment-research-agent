import { useState } from "react";

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
  const [expanded, setExpanded] =
    useState<number | null>(0);

  return (
    <section
      style={{
        background:
          "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "36px",
        boxShadow:
          "0 24px 60px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: "999px",
          background:
            "rgba(37,99,235,.15)",
          border:
            "1px solid rgba(37,99,235,.25)",
          color: "#93C5FD",
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "24px",
        }}
      >
        MARKET INTELLIGENCE
      </div>

      <h2
        style={{
          margin: 0,
          marginBottom: "30px",
          color: "#FAFAFA",
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "-0.8px",
        }}
      >
        Top News
      </h2>

      {articles.length === 0 ? (
        <p
          style={{
            color: "#A1A1AA",
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
          {articles.map((article, index) => {
            const isExpanded =
              expanded === index;

            return (
              <article
                key={index}
                style={{
                  background:
                    "rgba(255,255,255,0.03)",
                  border:
                    "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "18px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() =>
                    setExpanded(
                      isExpanded
                        ? null
                        : index
                    )
                  }
                  style={{
                    width: "100%",
                    background:
                      "transparent",
                    border: "none",
                    padding: "22px",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color:
                            "#FAFAFA",
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: 1.6,
                          marginBottom:
                            "10px",
                        }}
                      >
                        {article.title}
                      </div>

                      <div
                        style={{
                          color:
                            "#71717A",
                          fontSize: "13px",
                        }}
                      >
                        {article.source}
                        {article.publishedDate &&
                          ` • ${article.publishedDate}`}
                      </div>
                    </div>

                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius:
                          "50%",
                        background:
                          "rgba(37,99,235,.15)",
                        color:
                          "#60A5FA",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      {isExpanded
                        ? "−"
                        : "+"}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div
                    style={{
                      padding:
                        "0 22px 22px",
                      borderTop:
                        "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p
                      style={{
                        color:
                          "#D4D4D8",
                        lineHeight:
                          1.9,
                        marginTop:
                          "20px",
                        marginBottom:
                          "20px",
                      }}
                    >
                      {article.summary}
                    </p>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color:
                          "#60A5FA",
                        textDecoration:
                          "none",
                        fontWeight:
                          600,
                      }}
                    >
                      Read Original Article →
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}