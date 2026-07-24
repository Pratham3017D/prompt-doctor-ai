function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          PromptDoctor AI
        </h1>

        <p className="text-xs text-slate-400">
          Prompt Intelligence Platform
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <a
          href="#features"
          className="text-slate-300 hover:text-cyan-400 transition"
        >
          Features
        </a>

        <a
          href="#docs"
          className="text-slate-300 hover:text-cyan-400 transition"
        >
          Docs
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-slate-700 px-5 py-3 hover:border-cyan-400 hover:bg-slate-900 transition"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;