import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PromptInput from "../components/PromptInput";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <PromptInput />
      <Footer />
    </div>
  );
}

export default Home;