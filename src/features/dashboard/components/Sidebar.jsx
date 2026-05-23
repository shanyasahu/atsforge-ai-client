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

const menuItems = [
  { name: "Dashboard", icon: <FiGrid /> },
  { name: "Resume Analyzer", icon: <FiFileText /> },
  { name: "Skill Gap Detector", icon: <FiTarget /> },
  { name: "AI Interview Generator", icon: <FiMic /> },
  { name: "Interview Reports", icon: <FiBarChart2 /> },
  { name: "Resume Builder", icon: <FiEdit /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
          {!collapsed && (
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              ATSForge AI
            </h1>
          )}

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
              className="w-11 h-11 rounded-full"
            />

            {!collapsed && (
              <div>
                <h3 className="font-semibold text-sm">Alex Chen</h3>
                <p
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "var(--subtext)" }}
                >
                  Premium Tier
                </p>
              </div>
            )}
          </div>
        </div>

        {/* MENU */}
        <div className="mt-8 px-3 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <button
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
              `}
              style={{
                background:
                  index === 0
                    ? "linear-gradient(90deg, rgba(34,197,94,0.18), transparent)"
                    : "transparent",
                color: index === 0 ? "var(--primary)" : "var(--subtext)",
              }}
            >
              {/* ACTIVE BAR */}
              {index === 0 && (
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
            </button>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="px-3 pb-6 flex flex-col gap-2">
        {/* THEME TOGGLE */}
        <button
          onClick={() => setLightMode(!lightMode)}
          className="
            flex
            items-center
            gap-4
            px-4
            py-3
            rounded-2xl
            transition-all
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
        </button>

        {/* SETTINGS */}
        <button
          className="
            flex
            items-center
            gap-4
            px-4
            py-3
            rounded-2xl
            transition-all
          "
          style={{
            color: "var(--subtext)",
          }}
        >
          <span className="text-xl">
            <FiSettings />
          </span>

          {!collapsed && <span className="text-sm font-medium">Settings</span>}
        </button>

        {/* HELP */}
        <button
          className="
            flex
            items-center
            gap-4
            px-4
            py-3
            rounded-2xl
            transition-all
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
        </button>

        {/* LOGOUT */}
        <button
          className="
            flex
            items-center
            gap-4
            px-4
            py-3
            rounded-2xl
            transition-all
          "
          style={{
            color: "#ef4444",
          }}
        >
          <span className="text-xl">
            <FiLogOut />
          </span>

          {!collapsed && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </div>
  );
}
