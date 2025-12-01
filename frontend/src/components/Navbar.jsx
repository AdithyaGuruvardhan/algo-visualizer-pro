import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const middleNav = [
    { name: "Home", path: "/" },
    { name: "Visualizer", path: "/visualizer" },
    { name: "Learn", path: "/learn" },
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Patterns", path: "/patterns" },
    { name: "About", path: "/about" },  
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] lg:w-[95%] z-50 font-tektur">
      <div className="flex items-center justify-between">

        {/* --- LEFT: Logo --- */}
        <Link
          to="/"
          className="text-2xl font-bold text-white drop-shadow-md"
        >
          AlgoVisualizer Pro
        </Link>

        {/* --- MIDDLE NAV (Glassmorphic rounded box) --- */}
        <div
          className="
            hidden md:flex
            items-center gap-8 px-8 py-2
            bg-white/10 backdrop-blur-md
            rounded-2xl shadow-lg
          "
        >
          {middleNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg transition ${
                  isActive
                    ? "text-blue-300 font-semibold"
                    : "text-gray-200 hover:text-blue-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* --- RIGHT: Sign In button --- */}
        <Link
          to="/signin"
          className="
            hidden md:block
            px-5 py-2 rounded-xl
            bg-white/15 backdrop-blur-xl shadow-lg
            text-white hover:bg-white/25 transition
            border border-white/20
          "
        >
          Sign In
        </Link>

        {/* --- MOBILE HAMBURGER --- */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {open && (
        <div className="mt-4 md:hidden bg-white/10 backdrop-blur-xl rounded-xl shadow-lg p-4 space-y-3">
          {middleNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-lg text-gray-200 hover:text-blue-300"
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/signin"
            onClick={() => setOpen(false)}
            className="
              block text-lg text-white bg-white/20
              px-4 py-2 rounded-lg shadow
              hover:bg-white/30
            "
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
