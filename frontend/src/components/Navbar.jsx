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
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Patterns", path: "/patterns" },
    { name: "About", path: "/about" },
  ];

  // Close menu if click outside menu or button
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
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
          className="text-lg sm:text-lg md:text-md lg:text-lg font-bold text-white drop-shadow-md"
        >
          AlgoVisualizer Pro
        </Link>

        {/* --- MIDDLE NAV (Desktop Only) --- */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
          {middleNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base transition ${
                  isActive
                    ? "text-blue-300 font-semibold"
                    : "text-gray-200 hover:text-textSecondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* --- RIGHT: Sign In (Desktop) --- */}
        <Link
          to="/signin"
          className="hidden lg:block px-5 py-2 rounded-xl bg-white/15 backdrop-blur-xl shadow-lg text-white text-sm hover:bg-white/25 transition border border-white/20"
        >
          Sign In
        </Link>

        {/* --- HAMBURGER / X BUTTON (Mobile + Tablet) --- */}
        <button
          ref={buttonRef}
          className="relative w-10 h-10 flex flex-col justify-center items-center lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 pointer-events-none ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 pointer-events-none ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </button>
      </div>

      {/* --- MOBILE/TABLET MENU (Right-Aligned) --- */}
      {open && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-1 w-64 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg p-4 flex flex-col items-end space-y-3"
        >
          {middleNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-sm bg-white/10 rounded-lg shadow px-4 py-2 text-textPrimary hover:text-blue-300 text-center w-full"
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/signin"
            onClick={() => setOpen(false)}
            className="block text-sm text-white bg-white/15 px-4 py-2 rounded-lg shadow hover:bg-white/30 w-full text-center"
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
