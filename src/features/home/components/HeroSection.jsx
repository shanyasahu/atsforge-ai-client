import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] pt-20 pb-28">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[var(--primary)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-[var(--secondary)]/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-7">
          <div className="flex">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--primary)] border border-[var(--primary)]/30 bg-[var(--primary)]/8 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              NEW: AI INTERVIEW SIMULATION 2.0
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-[clamp(2.8rem,5.5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[var(--text)] font-['Plus_Jakarta_Sans'] m-0">
              Forge Your
              <br />
              Resume,
            </h1>
            <h1 className="text-[clamp(2.8rem,5.5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[var(--primary)] font-['Plus_Jakarta_Sans'] m-0">
              Beat ATS,
            </h1>
            <h1 className="text-[clamp(2.8rem,5.5vw,4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[var(--text)] font-['Plus_Jakarta_Sans'] m-0">
              Ace Interviews
            </h1>
          </div>

          <p className="text-[var(--subtext)] text-base leading-[1.8] max-w-[460px] m-0">
            ATSForge-AI helps developers craft ATS-optimized resumes, detect
            skill gaps, and prepare for interviews using advanced bio-mimetic AI
            logic.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--btntext)] font-bold px-7 py-3.5 rounded-xl text-sm shadow-[0_0_32px_rgba(34,197,94,0.3)] hover:bg-[var(--secondary)] hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              <span>✦</span> Get Started Free
            </Link>
            <Link
              to="/analyze"
              className="inline-flex items-center gap-2 bg-transparent text-[var(--text)] font-semibold px-7 py-3.5 rounded-xl text-sm border border-[var(--card-border)] hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              <span>📄</span> Analyze Resume
            </Link>
          </div>

          {/* Social proof */}
          {/* <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {["#22C55E", "#16A34A", "#84CC16", "#15803D"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[var(--bg)] flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ backgroundColor: c }}
                >
                  {["AR", "SC", "MT", "JK"][i]}
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--subtext)] m-0">
              <span className="text-[var(--primary)] font-bold">50,000+</span>{" "}
              developers already hired
            </p>
          </div> */}
        </div>

        {/* Right: Resume card — always dark */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px]">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--primary)]/25 via-transparent to-transparent" />
            <div className="relative rounded-2xl border border-[var(--primary)]/15 bg-[var(--bg)] p-7 shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 w-28 rounded-full bg-white/20" />
                  <div className="h-1.5 w-16 rounded-full bg-white/10" />
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--primary)]/15 border border-[var(--primary)]/30 rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-[10px] font-bold text-[var(--primary)] tracking-widest uppercase">
                    Live
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 mb-5">
                {[100, 85, 92, 70].map((w, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${w}%`,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
                <div className="h-1.5 w-3/5 rounded-full bg-[var(--primary)]/60" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/8" />
              </div>

              <div className="h-px w-full bg-white/6 mb-5" />

              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--subtext)] mb-1 font-semibold">
                    ATS Score
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-[var(--primary)] leading-none font-['Plus_Jakarta_Sans']">
                      94
                    </span>
                    <span className="text-[var(--subtext)] text-sm font-semibold">
                      /100
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--subtext)] mb-1 font-semibold">
                    Improvement
                  </p>
                  <span className="text-[var(--primary)] font-bold text-lg">
                    +31%
                  </span>
                </div>
              </div>

              <div className="h-2 w-full rounded-full bg-white/8 overflow-hidden mb-5">
                <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)]" />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "CI/CD",
                  "Docker",
                  "K8s",
                ].map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/8 text-[var(--primary)] tracking-wide"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[var(--primary)] text-[var(--btntext)] text-[10px] font-black px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] tracking-wider uppercase">
              ✦ Top 5%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
