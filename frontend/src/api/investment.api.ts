const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "http://localhost:3000/api/v1";

export async function researchCompany(
  company: string
) {
  const response = await fetch(
    `${BASE_URL}/investment/research`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
      }),
    }
  );

  return response.json();
}

export async function researchCompanyByTicker(
  ticker: string
) {
  const response = await fetch(
    `${BASE_URL}/investment/research`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticker,
      }),
    }
  );

  return response.json();
}