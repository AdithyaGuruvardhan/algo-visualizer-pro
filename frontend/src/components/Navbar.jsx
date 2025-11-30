import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

    const navItemsL = [
    { name: "Home", path: "/sorting" },
    { name: "About", path: "/searching" },
    { name: "Sign In", path: "/graphs" },
  ];

  const navItems = [
    { name: "Sorting", path: "/sorting" },
    { name: "Searching", path: "/searching" },
    { name: "Graphs", path: "/graphs" },
  ];

  return (
    <nav className="
    fixed top-4 left-1/2 -translate-x-1/2
    w-[95%] sm:w-[80%] md:w-[65%] lg:w-[60%]
    bg-white/20 backdrop-blur-md
    shadow-lg rounded-xl
    flex justify-evenly items-center
    py-1 px-6 
    z-50 whitespace-nowrap font-tektur
  ">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center py-3">
          <div className="hidden sm:flex items-center justify-center gap-8 flex-1 px-6">
            {navItemsL.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-accent flex-shrink-0">
            AlgoVisualizer Pro
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center justify-center gap-8 flex-1 px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            {navItemsL.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </NavLink>
            ))}
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
