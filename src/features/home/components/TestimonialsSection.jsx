const testimonials = [
  {
    stars: 5,
    text: "ATSForge-AI caught critical keywords I was missing for a Senior DevOps role. I got the interview call within 48 hours of updating.",
    name: "Alex Rivera",
    role: "Senior Engineer",
    avatar: "AR",
    company: "Google",
    color: "#22C55E",
  },
  {
    stars: 5,
    text: "The AI interview generator asked questions nearly identical to what the recruiters actually used. It felt like having a cheat code.",
    name: "Sarah Chen",
    role: "Full Stack Developer",
    avatar: "SC",
    company: "Stripe",
    color: "#16A34A",
  },
  {
    stars: 5,
    text: "Clean UI, powerful insights. The Skill Gap detector pointed out I needed to sharpen my Kubernetes skills before applying.",
    name: "Marcus Thorne",
    role: "Product Designer",
    avatar: "MT",
    company: "Figma",
    color: "#84CC16",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[var(--bg)] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-[var(--primary)] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--text)] mb-2 font-['Plus_Jakarta_Sans'] leading-tight">
              Loved by Developers
            </h2>
            <p className="text-[var(--subtext)] text-sm">
              Engineers from top tech companies use ATSForge-AI to level up
              their career game.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-[var(--primary)] font-['Plus_Jakarta_Sans']">
                4.9
              </span>
              <span className="text-[var(--subtext)] text-sm">/5</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[var(--primary)] text-base">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[var(--subtext)] text-[10px]">
                from 2,400+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  stars,
  text,
  name,
  role,
  avatar,
  company,
  color,
}) => (
  <div className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-7 flex flex-col gap-5 hover:border-[var(--primary)]/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm">
    <div
      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        backgroundColor: color + "12",
        transform: "translate(30%, -30%)",
      }}
    />

    <div className="flex items-start justify-between">
      <div className="flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-[var(--primary)] text-sm">
            ★
          </span>
        ))}
      </div>
      <span className="text-5xl leading-none text-[var(--text-muted)] font-serif select-none opacity-20">
        "
      </span>
    </div>

    <p className="text-sm text-[var(--subtext)] leading-[1.85] flex-1">
      {text}
    </p>

    <div className="flex items-center gap-3 pt-4 border-t border-[var(--card-border)]">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 tracking-wide"
        style={{
          backgroundColor: color + "18",
          border: `1px solid ${color}35`,
          color,
        }}
      >
        {avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-[var(--text)] leading-snug truncate">
          {name}
        </div>
        <div className="text-[10px] text-[var(--subtext)] uppercase tracking-widest font-semibold">
          {role} · {company}
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
