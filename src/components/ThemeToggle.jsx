import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="relative p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm dark:shadow-gray-900/30 flex items-center justify-center overflow-hidden cursor-pointer"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <motion.div
          animate={{
            scale: darkMode ? 1 : 0,
            rotate: darkMode ? 0 : -90,
            opacity: darkMode ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-amber-500 fill-amber-500/20 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          animate={{
            scale: darkMode ? 0 : 1,
            rotate: darkMode ? 90 : 0,
            opacity: darkMode ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600/10 drop-shadow-[0_0_8px_rgba(79,70,229,0.3)]" />
        </motion.div>
      </div>
    </button>
  );
}
