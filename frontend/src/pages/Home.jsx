import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromptInput from "../components/home/PromptInput";
import Footer from "../components/layout/Footer";

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