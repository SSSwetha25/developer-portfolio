
// components/Navbar.jsx
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
}