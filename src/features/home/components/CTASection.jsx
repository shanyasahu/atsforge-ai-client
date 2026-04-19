import { Link } from "react-router";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-32">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />

      {/* Big center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-7">
        <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--primary)] border border-[var(--primary)]/30 bg-[var(--primary)]/8 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
          Start for free · No card required
        </div>

        <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-black tracking-[-0.04em] text-[var(--text)] leading-[1.08] font-['Plus_Jakarta_Sans'] m-0">
          Start forging your
          <br />
          <span className="text-[var(--primary)]">career today</span>
        </h2>

        <p className="text-[var(--subtext)] text-base leading-relaxed max-w-md m-0">
          Join 50,000+ developers who have optimized their path to their dream
          job using AI-powered career tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--btntext)] font-bold px-10 py-4 rounded-xl text-base shadow-[0_0_40px_rgba(34,197,94,0.35)] hover:bg-[var(--secondary)] hover:shadow-[0_0_56px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            ✦ Get Started Free
          </Link>
          <Link
            to="/demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[var(--text)] font-semibold px-8 py-4 rounded-xl text-base border border-[var(--text)]/15 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 transition-all duration-200 no-underline"
          >
            Watch Demo →
          </Link>
        </div>

        <p className="text-[var(--subtext)] text-xs m-0">
          No credit card required · Cancel anytime · Free forever plan available
        </p>
      </div>
    </section>
  );
};

export default CTASection;
