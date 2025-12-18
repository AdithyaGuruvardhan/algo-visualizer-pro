import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const middleNav = [
    { name: "Home", path: "/" },
    { name: "Visualizer", path: "/visualizer" },
    { name: "Learn", path: "/learn" },
    { name: "Roadmap", path: "/Roadmap" },
    { name: "Patterns", path: "/patterns" },
  ];

  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeButtonRef = useRef(null);

  // Close menu if click outside menu or button
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        themeButtonRef.current &&
        !themeButtonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[95%] z-50 font-tektur">
      <div className="flex items-center justify-between">

        {/* --- LEFT: Logo --- */}
        <Link
          to="/"
          className="
  text-lg sm:text-lg md:text-md lg:text-lg
  font-bold drop-shadow-md
  text-light-text-primary dark:text-dark-text-primary
"
        >
          AlgoVisualizer <span className="text-brand-accent">Pro</span>
        </Link>

        {/* --- MIDDLE NAV (Desktop Only) --- */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-2 dark:bg-surface bg-light-subtle backdrop-blur-md rounded-2xl shadow-lg">
          {middleNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base transition ${isActive
                  ? "font-semibold text-light-text-primary dark:text-dark-text-primary"
                  : "text-light-text-secondary dark:text-dark-text-secondary hover:text-accent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* --- RIGHT: Actions (Desktop) --- */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/signin"
            className="px-5 py-2 rounded-xl bg-light-surface/70 dark:bg-dark-surface/60
  text-light-text-primary dark:text-dark-text-primary
  border border-light-border dark:border-dark-border
  backdrop-blur-xl shadow-lg
  hover:bg-light-surface dark:hover:bg-dark-surface
  transition text-sm"
          >
            Sign In
          </Link>

          {/* Theme Toggle */}
          <button
            ref={themeButtonRef}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="
      w-10 h-10
      rounded-full
      flex items-center justify-center
      bg-light-surface/70 dark:bg-dark-surface/60
  border border-light-border dark:border-dark-border
  backdrop-blur-md
  hover:bg-light-surface dark:hover:bg-dark-surface
  transition
    "
          >
            {/* Sun */}
            <svg
              className="w-5 h-5 text-yellow-300 dark:hidden"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            {/* Moon */}
            <svg
              className="w-5 h-5 text-indigo-300 hidden dark:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 000 14A9 9 0 0021 12.79z" />
            </svg>
          </button>
        </div>


        {/* --- HAMBURGER / X BUTTON (Mobile + Tablet) --- */}
        <button
          ref={buttonRef}
          className="relative w-10 h-10 flex flex-col justify-center items-center lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block absolute h-0.5 w-6 bg-light-text-primary dark:bg-dark-text-primary
 transform transition duration-300 pointer-events-none ${open ? "rotate-45" : "-translate-y-1.5"
              }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-light-text-primary dark:bg-dark-text-primary
 transform transition duration-300 pointer-events-none ${open ? "-rotate-45" : "translate-y-1.5"
              }`}
          ></span>
        </button>
      </div>

      {/* --- MOBILE/TABLET MENU (Right-Aligned) --- */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-1 w-64 bg-light-surface/80 dark:bg-dark-surface/70
border border-light-border dark:border-dark-border
 backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col items-end space-y-3"
        >
          <div className="w-full flex justify-end">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="
      w-10 h-10
      rounded-full
      flex items-center justify-center
      bg-light-surface/70 dark:bg-dark-surface/60
  border border-light-border dark:border-dark-border
  backdrop-blur-md
  hover:bg-light-surface dark:hover:bg-dark-surface
  transition
    "
            >
              <svg
                className="w-5 h-5 text-yellow-300 dark:hidden"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>

              <svg
                className="w-5 h-5 text-indigo-300 hidden dark:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 0111.21 3a7 7 0 000 14A9 9 0 0021 12.79z" />
              </svg>
            </button>
          </div>

          {middleNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="
  text-sm bg-white/10 rounded-lg shadow px-4 py-2
  text-light-text-secondary dark:text-dark-text-secondary
  hover:text-accent
  text-center w-full
"
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/signin"
            onClick={() => setOpen(false)}
            className="
  block text-sm
  bg-light-surface/70 dark:bg-dark-surface/60
  text-light-text-primary dark:text-dark-text-primary
  border border-light-border dark:border-dark-border
  px-4 py-2 rounded-lg shadow
  hover:bg-light-surface dark:hover:bg-dark-surface
  w-full text-center
"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
