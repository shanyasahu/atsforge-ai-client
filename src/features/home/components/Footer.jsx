import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--primary)]/8 py-7">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <span className="text-[var(--primary)] text-sm font-bold font-['Plus_Jakarta_Sans']">
          ATSForge-AI
        </span>

        {/* Links */}
        <div className="flex flex-wrap gap-6">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[var(--subtext)] text-xs hover:text-[var(--text)] transition-colors duration-200 no-underline"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-[var(--subtext)] text-xs">
          © 2024 ATSForge-AI. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
