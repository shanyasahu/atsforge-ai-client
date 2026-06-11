import { useState, useEffect } from "react";
import {
  FiGrid,
  FiFileText,
  FiTarget,
  FiMic,
  FiBarChart2,
  FiEdit,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiMenu,
  FiChevronLeft,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import Logo from "../../components/Logo";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";
import { getMe } from "../../auth/services/auth.api";
import { useAuth } from "../../hooks/useAuth";

const menuItems = [
  { name: "Dashboard", icon: <FiGrid />, link: "/dashboard" },
  {
    name: "Resume Analyzer",
    icon: <FiFileText />,
    link: "/dashboard/resume-analyzer",
  },
  {
    name: "Skill Gap Detector",
    icon: <FiTarget />,
    link: "/dashboard/skill-gap-detector",
  },
  {
    name: "AI Interview Generator",
    icon: <FiMic />,
    link: "/dashboard/ai-interview-generator",
  },
  {
    name: "Interview Report",
    icon: <FiBarChart2 />,
    link: "/dashboard/interview-report",
  },
  { name: "Resume Builder", icon: <FiEdit />, link: "/resume-builder" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [user, setUser] = useState(null);

  const onLogout = async () => {
    const success = await handleLogout();

    if (success) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    async function fetchUser() {
      const data = await getMe();

      if (data) {
        setUser(data.user);
      }
    }

    fetchUser();
  }, [lightMode]);

  return (
    <div
      className={`
        h-screen
        transition-all
        duration-300
        border-r
        flex
        flex-col
        justify-between
        backdrop-blur-xl
        ${collapsed ? "w-[90px]" : "w-[280px]"}
      `}
      style={{
        background: "var(--bg)",
        borderColor: "var(--nav-border)",
        color: "var(--text)",
      }}
    >
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="flex items-center justify-between px-6 py-6">
          {!collapsed && <Logo />}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-2xl transition"
            style={{ color: "var(--text)" }}
          >
            {collapsed ? <FiMenu /> : <FiChevronLeft />}
          </button>
        </div>

        {/* USER CARD */}
        <div className="px-4">
          <div
            className={`
              rounded-2xl
              border
              p-3
              md:p-1
              flex
              items-center
              gap-3
              transition-all
              ${collapsed ? "justify-center" : ""}
            `}
            style={{
              background: "var(--card-bg)",
              borderColor: "var(--card-border)",
            }}
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-11 h-11 rounded-full object-cover"
            />

            {!collapsed && (
              <div>
                <h3 className="font-semibold text-sm">
                  {user?.username || "Guest User"}
                </h3>
                <p
                  className="text-xs tracking-wide lowercase"
                  style={{ color: "var(--subtext)" }}
                >
                  {/* Premium Tier */}
                  {user?.email || "Guest User"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* MENU */}
        <div className="mt-8 px-3 flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
              <Link
                to={item.link}
                key={index}
                className={`
          group
          relative
          flex
          items-center
          gap-4
          px-4
          py-3
          rounded-2xl
          transition-all
          duration-300
          hover:translate-x-1
          cursor-pointer
        `}
                style={{
                  background: isActive
                    ? "linear-gradient(90deg, rgba(34,197,94,0.18), transparent)"
                    : "transparent",
                  color: isActive ? "var(--primary)" : "var(--subtext)",
                }}
              >
                {/* ACTIVE BAR */}
                {isActive && (
                  <div
                    className="absolute right-0 top-2 h-8 w-1 rounded-full"
                    style={{
                      background: "var(--primary)",
                    }}
                  />
                )}

                <span className="text-xl">{item.icon}</span>

                {!collapsed && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}

                {/* TOOLTIP WHEN COLLAPSED */}
                {collapsed && (
                  <div
                    className="
              absolute
              left-21
              opacity-0
              invisible
              group-hover:opacity-100
              group-hover:visible
              transition-all
              duration-200
              whitespace-nowrap
              px-3
              py-2
              rounded-xl
              text-sm
              z-50
              shadow-lg
            "
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                      color: "var(--text)",
                    }}
                  >
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* BOTTOM */}
      {/* BOTTOM */}
      <div className="px-3 pb-6 flex flex-col gap-2">
        {/* THEME TOGGLE */}
        <button
          onClick={() => setLightMode(!lightMode)}
          className="
      group
      relative
      flex
      items-center
      gap-4
      px-4
      py-3
      rounded-2xl
      transition-all
      cursor-pointer
    "
          style={{
            color: "var(--subtext)",
          }}
        >
          <span className="text-xl">{lightMode ? <FiMoon /> : <FiSun />}</span>

          {!collapsed && (
            <span className="text-sm font-medium">
              {lightMode ? "Dark Mode" : "Light Mode"}
            </span>
          )}

          {collapsed && (
            <div
              className="
          absolute
          left-21
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          whitespace-nowrap
          px-3
          py-2
          rounded-xl
          text-sm
          z-50
          shadow-lg
        "
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text)",
              }}
            >
              {lightMode ? "Dark Mode" : "Light Mode"}
            </div>
          )}
        </button>

        {/* SETTINGS */}
        <button
          className="
      group
      relative
      flex
      items-center
      gap-4
      px-4
      py-3
      rounded-2xl
      transition-all
      cursor-pointer
    "
          style={{
            color: "var(--subtext)",
          }}
        >
          <span className="text-xl">
            <FiSettings />
          </span>

          {!collapsed && <span className="text-sm font-medium">Settings</span>}

          {collapsed && (
            <div
              className="
          absolute
          left-21
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          whitespace-nowrap
          px-3
          py-2
          rounded-xl
          text-sm
          z-50
          shadow-lg
        "
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text)",
              }}
            >
              Settings
            </div>
          )}
        </button>

        {/* HELP */}
        <button
          className="
      group
      relative
      flex
      items-center
      gap-4
      px-4
      py-3
      rounded-2xl
      transition-all
      cursor-pointer
    "
          style={{
            color: "var(--subtext)",
          }}
        >
          <span className="text-xl">
            <FiHelpCircle />
          </span>

          {!collapsed && (
            <span className="text-sm font-medium">Help Center</span>
          )}

          {collapsed && (
            <div
              className="
          absolute
          left-21
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          whitespace-nowrap
          px-3
          py-2
          rounded-xl
          text-sm
          z-50
          shadow-lg
        "
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text)",
              }}
            >
              Help Center
            </div>
          )}
        </button>

        {/* LOGOUT */}
        <button
          onClick={onLogout}
          className="
      group
      relative
      flex
      items-center
      gap-4
      px-4
      py-3
      rounded-2xl
      transition-all
      cursor-pointer
    "
          style={{
            color: "#ef4444",
          }}
        >
          <span className="text-xl">
            <FiLogOut />
          </span>

          {!collapsed && <span className="text-sm font-medium">Log Out</span>}

          {collapsed && (
            <div
              className="
          absolute
          left-21
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          whitespace-nowrap
          px-3
          py-2
          rounded-xl
          text-sm
          z-50
          shadow-lg
        "
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text)",
              }}
            >
              Log Out
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
