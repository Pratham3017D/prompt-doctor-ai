import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="mx-auto mt-20 flex max-w-5xl flex-col items-center px-6 text-center">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300"
      >
        AI Powered Prompt Analysis
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-6xl font-extrabold leading-tight md:text-8xl"
      >
        Before You Ask AI...
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Ask PromptDoctor.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 max-w-2xl text-xl leading-9 text-slate-400"
      >
        Analyze prompts, discover weaknesses, and generate
        professional-quality prompts before sending them to any AI model.
      </motion.p>

    </section>
  );
}

export default Hero;