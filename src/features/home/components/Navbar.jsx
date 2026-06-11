import { useState } from "react";
import { Link, useLocation } from "react-router";
import ThemeToggle from "../../theme/components/ThemeToggle";
import logo from "../../../assets/logo.png";
import Logo from "../../components/Logo";

const navLinks = ["Home", "Features", "Pricing", "About"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (item) => {
    const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-(--bg)/90 border-b border-(--nav-border) backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-(--primary) font-black text-lg tracking-tight font-['Plus_Jakarta_Sans'] no-underline shrink-0 flex items-center gap-2"
        >
          {/* <span className="w-6 h-6 rounded-md bg-(--primary) flex items-center justify-center shrink-0">
            <span className="text-(--btntext) text-[10px] font-black">A</span>
          </span>
          ATSForge-AI */}
          <Logo />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0 flex-1 justify-center">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={
                  item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
                }
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  isActive(item)
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--subtext)] hover:text-[var(--text)] hover:bg-[var(--card-bg)]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <div className="w-px h-5 bg-[var(--card-border)] mx-1" />
          <Link
            to="/login"
            className="text-[var(--text)] text-sm px-4 py-2 rounded-lg hover:bg-[var(--card-bg)] transition-all duration-200 no-underline font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[var(--primary)] text-[var(--btntext)] text-sm font-bold px-5 py-2 rounded-lg hover:bg-[var(--secondary)] shadow-[0_0_16px_rgba(34,197,94,0.2)] hover:shadow-[0_0_24px_rgba(34,197,94,0.4)] transition-all duration-200 no-underline"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[var(--text)] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--text)] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--text)] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-5 pt-2 border-t border-[var(--card-border)] bg-[var(--bg)]">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
              }
              className={`py-2.5 px-3 rounded-lg text-sm font-medium no-underline transition-all duration-200 ${
                isActive(item)
                  ? "text-[var(--primary)] bg-[var(--primary)]/10"
                  : "text-[var(--subtext)] hover:text-[var(--text)] hover:bg-[var(--card-bg)]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="h-px bg-[var(--card-border)] my-2" />
          <Link
            to="/login"
            className="py-2.5 px-3 text-[var(--subtext)] text-sm no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[var(--primary)] text-[var(--btntext)] text-sm font-bold px-5 py-3 rounded-xl text-center no-underline mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
