import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromptInput from "../components/home/PromptInput";

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <Hero />
      <PromptInput />
    </main>
  );
}

export default Home;