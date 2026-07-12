import type { ReactNode } from "react";

import Header from "./Header";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px 64px",
        }}
      >
        {children}
      </main>
    </div>
  );
}