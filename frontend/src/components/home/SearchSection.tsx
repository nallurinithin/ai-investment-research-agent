import { useState } from "react";

import Button from "../common/Button";
import Input from "../common/Input";

interface SearchSectionProps {
  onAnalyze: (company: string) => Promise<void>;
}

export default function SearchSection({
  onAnalyze,
}: SearchSectionProps) {
  const [company, setCompany] = useState("");

  async function handleAnalyze() {
    const value = company.trim();

    if (!value) {
      return;
    }

    await onAnalyze(value);
  }

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Input
        placeholder="Enter company name or ticker (Example: Apple or AAPL)"
        value={company}
        onChange={setCompany}
      />

      <Button
        label="Analyze Company"
        onClick={handleAnalyze}
      />
    </section>
  );
}