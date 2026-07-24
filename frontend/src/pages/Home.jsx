import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromptInput from "../components/home/PromptInput";

function Home() {

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const diagnosePrompt = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/diagnose",
        {
          prompt,
        }
      );

      setResult(response.data.result);

    } catch (error) {
      console.error(error);
      alert("Failed to analyze prompt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        loading={loading}
        diagnosePrompt={diagnosePrompt}
        result={result}
      />
    </main>
  );
}

export default Home;