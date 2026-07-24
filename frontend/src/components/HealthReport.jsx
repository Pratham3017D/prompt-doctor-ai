function HealthReport() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

      <h2 className="text-3xl font-bold text-white">
        🩺 Prompt Health Report
      </h2>

      <div className="mt-8">

        <div className="mb-3 flex justify-between">
          <span className="text-slate-300">Overall Score</span>

          <span className="font-bold text-cyan-400">
            92 / 100
          </span>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"></div>
        </div>

      </div>

      <div className="mt-8 space-y-4 text-slate-300">

        <p>🟢 Context : Excellent</p>

        <p>🟢 Clarity : Excellent</p>

        <p>🟡 Constraints : Needs Improvement</p>

        <p>🔴 Output Format : Missing</p>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-950 p-6">

        <h3 className="text-xl font-bold text-cyan-400">
          💊 Prompt Prescription
        </h3>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
          <li>Add a role.</li>
          <li>Specify the output format.</li>
          <li>Mention the target audience.</li>
        </ul>

      </div>

    </section>
  );
}

export default HealthReport;