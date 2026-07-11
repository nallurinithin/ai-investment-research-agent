import app from "./app.js";
import { env } from "./infrastructure/config/env.js";

const PORT = env.PORT;

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "AI Investment Research Agent Backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});