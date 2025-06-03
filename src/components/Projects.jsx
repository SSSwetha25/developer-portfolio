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
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-blue-600 dark:text-blue-300 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
