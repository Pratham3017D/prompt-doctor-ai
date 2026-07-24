function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">

      <h1 className="text-2xl font-bold text-cyan-400">
        🩺 PromptDoctor AI
      </h1>

      <button
        className="
        border
        border-cyan-400
        px-5
        py-2
        rounded-xl
        hover:bg-cyan-400
        hover:text-black
        transition
        "
      >
        GitHub
      </button>

    </nav>
  );
}

export default Navbar;