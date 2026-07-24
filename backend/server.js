import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import diagnoseRoute from "./routes/diagnoseRoute.js";

dotenv.config();
console.log("API KEY:", process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/diagnose", diagnoseRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});