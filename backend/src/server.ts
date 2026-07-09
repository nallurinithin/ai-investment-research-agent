import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "AI Investment Research Agent Backend is running"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});