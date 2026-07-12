import type { ReactNode } from "react";

import Header from "./Header";

interface AppLayoutProps {
  children: ReactNode;
}

const sections = [
  {
    id: "analysis",
    label: "Analysis",
  },
  {
    id: "strengths-risks",
    label: "Strengths & Risks",
  },
  {
    id: "snapshots",
    label: "Snapshots",
  },
  {
    id: "market-intelligence",
    label: "Market Intelligence",
  },
];

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "#FAFAFA",
        display: "flex",
      }}
    >
      <aside
        style={{
          width: "380px",
          position: "sticky",
          top: 0,
          height: "100vh",
          borderRight:
            "1px solid rgba(255,255,255,0.08)",
          background:
            "rgba(17,24,39,0.75)",
          backdropFilter: "blur(18px)",
          padding: "32px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <div
          style={{
            marginTop: "48px",
          }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              style={{
                display: "block",
                padding: "14px 16px",
                marginBottom: "10px",
                borderRadius: "12px",
                textDecoration: "none",
                color: "#CBD5E1",
                fontWeight: 500,
                transition: "0.2s",
                background:
                  "rgba(255,255,255,0.03)",
              }}
            >
              {section.label}
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            paddingTop: "24px",
            borderTop:
              "1px solid rgba(255,255,255,0.08)",
            color: "#64748B",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          AI-powered equity research built on
          financial evidence, market intelligence,
          and transparent reasoning.
        </div>
      </aside>

      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <main
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            padding: "48px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}