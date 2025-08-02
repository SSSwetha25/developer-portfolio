import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Waste Bin",
    description: "A sensor-based waste bin that segregates waste and includes a composting unit.",
    tech: ["ESP32", "Edge Impulse", "Python", "C++"],
    link: "https://github.com/SSSwetha25/smart-waste-segregation-system.git",
  },
  {
    title: "AI Chatbot with Sign Language Input",
    description: "A real-time chatbot that can take users input in text as well as sign language form.",
    tech: ["APIs", "React", "Tensorflow"],
    link: "https://github.com/SSSwetha25/asl-chatbot.git",
  },
  {
    title: "Task Manager",
    description: "A to-do list app with drag & drop, persistent storage, and dark mode.",
    tech: ["React", "Tailwind", "localStorage"],
    link: "https://github.com/SSSwetha25/To-Do-App.git",
  },
  
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-sky-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors px-6 py-20 overflow-hidden"
    >
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14 drop-shadow-sm">
          Projects
        </h2>
        <div className=
        "grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-auto"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
