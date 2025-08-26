import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-2xl px-6 py-4 shadow-xl flex items-center justify-between z-50 transition-all">
      
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
        My<span className="text-blue-600 dark:text-blue-400">Portfolio</span>
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-5 text-base font-medium">
        {["Home", "About", "Projects", "Contact"].map((text) => (
          <Link
            key={text}
            to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {text}
          </Link>
        ))}

        {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}
        </button> */}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-3">
        {/* <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600" />
          )}
        </button> */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg flex flex-col items-center gap-4 py-6 md:hidden">
          {["Home", "About", "Projects", "Contact"].map((text) => (
            <Link
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
