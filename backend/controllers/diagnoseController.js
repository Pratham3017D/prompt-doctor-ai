import { analyzePrompt } from "../services/geminiService.js";

export async function diagnosePrompt(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required",
      });
    }

    const result = await analyzePrompt(prompt);

    res.status(200).json({
      success: true,
      result,
    });

  } catch (error) {
    console.error("Diagnose Error:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}