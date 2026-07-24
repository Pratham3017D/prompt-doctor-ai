import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

try {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: "Say hello!",
  });

  console.log("Response:");
  console.log(response.text);
} catch (err) {
  console.log("========== ERROR ==========");
  console.log("Name:", err.name);
  console.log("Status:", err.status);
  console.log("Message:", err.message);
  console.log("Full Error:");
  console.dir(err, { depth: null });
}