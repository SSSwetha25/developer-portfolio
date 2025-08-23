import { motion } from "framer-motion";
import { Code2, GitBranch, Palette } from "lucide-react";

export default function About() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    Tools: ["Git", "GitHub"],
    Design: ["Figma"],
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-sky-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/40 shadow-xl rounded-3xl p-10 text-gray-800 dark:text-gray-100"
      >
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          About Me
          {/* <span className="block mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span> */}
        </h2>

        {/* About Text */}
        <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          <p className="text-gray-700 dark:text-gray-300">
            I'm a Computer Science undergraduate driven by a strong interest in software development, particularly in web technologies. I enjoy building efficient, scalable, and user-focused applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            My focus has been on mastering frontend technologies like React, TypeScript, and Tailwind CSS, while also gaining experience with backend tools, version control systems, and deployment workflows.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I'm currently expanding my understanding of full-stack development, contributing to open-source, and staying up-to-date with the latest trends in the tech ecosystem.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-14 space-y-10">
          {/* Frontend */}
          <div>
            <h3 className="flex items-center justify-center text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              <Code2 className="w-5 h-5 mr-2 text-blue-500" /> Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.Frontend.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/40 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400/60"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="flex items-center justify-center text-xl font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              <GitBranch className="w-5 h-5 mr-2 text-green-500" /> Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.Tools.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/40 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-green-400/60"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Design */}
          <div>
            <h3 className="flex items-center justify-center text-xl font-semibold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
              <Palette className="w-5 h-5 mr-2 text-pink-500" /> Design
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.Design.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/40 text-sm font-medium text-gray-800 dark:text-gray-200 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:border-pink-400/60"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
