const features = [
  {
    icon: "🔍",
    title: "AI Resume Analyzer",
    description:
      "Instantly benchmark your resume against top industry standard ATS algorithms. Identify missing keywords and formatting errors that get you filtered out.",
    tag: "Most Popular",
  },
  {
    icon: "🎯",
    title: "Skill Gap Detection",
    description:
      "Map your current stack against job descriptions to find exactly what technologies you need to learn next.",
    tag: null,
  },
  {
    icon: "💬",
    title: "Interview Questions",
    description:
      "Generate role-specific AI mock interview questions based on your unique experience profile.",
    tag: null,
  },
  {
    icon: "✍️",
    title: "AI Resume Builder",
    description:
      "Build beautiful, compliant resumes with AI-generated bullet points that highlight your impact using the STAR method.",
    tag: "New",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[var(--bg)] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <p className="text-[var(--primary)] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Platform Features
          </p>
          <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--text)] mb-4 font-['Plus_Jakarta_Sans'] leading-tight">
            Powerful Features for
            <br />
            Modern Careers
          </h2>
          <p className="text-[var(--subtext)] text-base leading-relaxed">
            Precision tools built with Kinetic Growth logic to evolve your
            professional identity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, tag }) => {
  return (
    <div className="relative group cursor-default rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 flex flex-col gap-5 hover:border-[var(--primary)]/35 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {tag && (
        <div className="absolute top-4 right-4">
          <span className="text-[9px] font-black tracking-widest uppercase bg-[var(--primary)] text-[var(--btntext)] px-2 py-0.5 rounded-full">
            {tag}
          </span>
        </div>
      )}

      <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-xl shrink-0 group-hover:bg-[var(--primary)]/15 transition-colors duration-300">
        {icon}
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {/* text-[var(--text)] works correctly in BOTH themes now */}
        <h3 className="text-[0.95rem] font-bold text-[var(--text)] leading-snug font-['Plus_Jakarta_Sans'] m-0">
          {title}
        </h3>
        <p className="text-sm text-[var(--subtext)] leading-relaxed m-0">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-[var(--primary)] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6h7M6.5 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--tertiary)] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  );
};

export default FeaturesSection;
