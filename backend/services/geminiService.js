import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

console.log("Gemini API Key:", process.env.GEMINI_API_KEY);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzePrompt(userPrompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: `
You are PromptDoctor AI.

Analyze the following prompt.

Return ONLY valid JSON in this format:

{
  "score": 90,
  "clarity": "Excellent",
  "context": "Good",
  "constraints": "Needs Improvement",
  "outputFormat": "Missing",
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "improvedPrompt": "..."
}

Prompt:
${userPrompt}
`,
  });

  const cleaned = response.text.replace(/```json|```/g, "").trim();

return JSON.parse(cleaned);
}