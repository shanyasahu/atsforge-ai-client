const steps = [
  {
    number: "01",
    title: "Upload Resume",
    description:
      "Drop your existing PDF or Word file into our analyzer to start the diagnostic process.",
    icon: "📄",
  },
  {
    number: "02",
    title: "Paste Job Description",
    description:
      "Provide the role you're targeting so our AI can perform a deep semantic alignment check.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Get AI Insights",
    description:
      "Receive a detailed report on keyword density, formatting score, and critical skill gaps.",
    icon: "🧠",
  },
  {
    number: "04",
    title: "Prepare for Interview",
    description:
      "Use generated questions and reports to walk into your interview with total confidence.",
    icon: "🎯",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-[var(--bg)] py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(34,197,94,0.04)_0%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[var(--primary)] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--text)] mb-4 font-['Plus_Jakarta_Sans']">
            How the Forge Works
          </h2>
          <p className="text-[var(--subtext)] text-base max-w-md mx-auto leading-relaxed">
            Four steps from hidden potential to hired professional.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          <div className="absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-[var(--primary)]/20 via-[var(--primary)]/40 to-[var(--primary)]/20" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              <div className="relative w-14 h-14 rounded-full border-2 border-[var(--primary)]/40 bg-[var(--card-bg)] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.12)] z-10">
                <span className="text-[var(--primary)] font-black text-lg font-['Plus_Jakarta_Sans'] leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-0 rounded-full border border-[var(--primary)]/15 scale-[1.4]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-[var(--text)] font-['Plus_Jakarta_Sans']">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--subtext)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[var(--primary)]/30 via-[var(--primary)]/40 to-transparent" />
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-6 pb-10 last:pb-0 relative"
            >
              <div className="relative w-12 h-12 rounded-full border-2 border-[var(--primary)]/40 bg-[var(--card-bg)] flex items-center justify-center shrink-0 z-10 shadow-[0_0_16px_rgba(34,197,94,0.12)]">
                <span className="text-[var(--primary)] font-black text-sm font-['Plus_Jakarta_Sans']">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 pt-2">
                <h3 className="text-sm font-bold text-[var(--text)] font-['Plus_Jakarta_Sans']">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--subtext)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Average ATS score increase", value: "+47%", icon: "📈" },
            { label: "Interview callback rate", value: "3.2×", icon: "📞" },
            { label: "Time to first interview", value: "< 48h", icon: "⚡" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] px-6 py-5 flex items-center gap-4"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-2xl font-black text-[var(--primary)] font-['Plus_Jakarta_Sans'] leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--subtext)] mt-0.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
