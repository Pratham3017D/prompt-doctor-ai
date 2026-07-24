import { useState } from "react";
import HealthReport from "../HealthReport";

const promptTemplates = [
  {
    name: "💻 Coding",
    prompt: `Act as a Senior Software Engineer.

Explain Binary Search with:
• Intuition
• Dry Run
• Time Complexity
• Space Complexity
• C++ Implementation
• Interview Tips`,
  },

  {
    name: "📚 Study",
    prompt: `Act as my tutor.

Teach Operating Systems from beginner to advanced with examples and important interview questions.`,
  },

  {
    name: "📧 Email",
    prompt: `Write a professional internship request email for a software company.`,
  },

  {
    name: "✈ Travel",
    prompt: `Plan a 5-day Japan itinerary including budget, hotels, transport and food.`,
  },

  {
    name: "📈 Business",
    prompt: `Create a business plan for an AI startup targeted at college students.`,
  },

  {
    name: "🎥 YouTube",
    prompt: `Generate a complete YouTube video script about Artificial Intelligence with a strong hook and CTA.`,
  },
];

function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const diagnosePrompt = () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setShowReport(false);

    setTimeout(() => {
      setLoading(false);
      setShowReport(true);
    }, 2500);
  };

  const quality =
    prompt.length === 0
      ? "Start typing..."
      : prompt.length < 80
      ? "🟡 Short Prompt"
      : prompt.length < 250
      ? "🟢 Good Prompt"
      : "💎 Detailed Prompt";

  return (
    <section className="mx-auto mt-24 max-w-5xl px-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 shadow-2xl backdrop-blur-xl">

        {/* Heading */}

        <div className="flex items-center gap-3">
          <span className="text-4xl">🩺</span>

          <div>
            <h2 className="text-3xl font-bold text-white">
              Diagnose Your Prompt
            </h2>

            <p className="mt-1 text-slate-400">
              Paste any AI prompt and receive professional-quality analysis.
            </p>
          </div>
        </div>

        {/* Prompt Templates */}

        <div className="mt-8 flex flex-wrap gap-3">
          {promptTemplates.map((item) => (
            <button
              key={item.name}
              onClick={() => setPrompt(item.prompt)}
              className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-slate-700 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Textarea */}

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type or paste your prompt here..."
          className="mt-8 h-64 w-full resize-none rounded-2xl border border-slate-700 bg-slate-950 p-6 text-lg text-slate-100 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />

        {/* Character Counter */}

        <div className="mt-4 flex items-center justify-between">

          <p className="text-slate-400">
            Characters :
            <span className="ml-2 font-bold text-cyan-400">
              {prompt.length}
            </span>
          </p>

          <p className="font-medium text-slate-300">
            {quality}
          </p>

        </div>

        {/* Diagnose Button */}

        <button
          onClick={diagnosePrompt}
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "🩺 Diagnosing Prompt..." : "🩺 Diagnose Prompt →"}
        </button>

        {/* Report */}

        {showReport && (
          <div className="mt-10">
            <HealthReport />
          </div>
        )}

      </div>
    </section>
  );
}

export default PromptInput;