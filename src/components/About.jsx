import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-sky-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20 transition-colors">
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
      className="max-w-4xl w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 shadow-2xl rounded-3xl p-10 text-gray-800 dark:text-gray-100">
        <h2 className="text-4xl font-extrabold mb-6 border-b-2 border-blue-500 inline-block text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Hello! I’m a passionate and curious web developer currently exploring the world of modern frontend development.
            I love building clean, responsive, and user-friendly interfaces — and I enjoy learning new technologies as I go.
          </p>
          <p>
            I have experience working with <span className="text-blue-700 dark:text-blue-400 font-medium">HTML, CSS, JavaScript, React,</span> and <span className="text-blue-700 dark:text-blue-400 font-medium">Tailwind CSS</span>.
            I’m always up for a challenge and love solving real-world problems through code.
          </p>
          <p>
            This portfolio is a work in progress — just like me! I'm actively seeking internships or projects where I can grow, collaborate, and contribute meaningfully as a developer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center text-sm">
  {[
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'Figma'
  ].map((skill) => (
    <span
      key={skill}
      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full shadow-sm"
    >
      {skill}
    </span>
  ))}
</div>

        </div>
      </motion.div>
    </section>
  );
}
