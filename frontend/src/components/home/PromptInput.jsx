function PromptInput() {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-6">

      <textarea

        placeholder="Type your prompt here..."

        className="
        w-full
        h-56
        bg-slate-900
        border
        border-slate-700
        rounded-2xl
        p-6
        text-lg
        outline-none
        focus:border-cyan-400
        "

      />

      <button

        className="
        mt-6
        w-full
        bg-cyan-400
        text-black
        py-4
        rounded-xl
        font-bold
        text-lg
        hover:scale-[1.02]
        transition
        "

      >

        🩺 Diagnose Prompt

      </button>

    </section>
  );
}

export default PromptInput;