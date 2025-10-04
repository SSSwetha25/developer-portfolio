import { motion } from "framer-motion";
export default function About() {
  return (
    <section className="pt-28 min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-sky-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20 transition-colors">
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 shadow-2xl rounded-3xl p-10 text-gray-800 dark:text-gray-100"
      >
        {" "}
        <h2 className="text-4xl font-extrabold mb-6 border-b-2 border-blue-500 inline-block text-gray-900 dark:text-white">
          {" "}
          About Me{" "}
        </h2>{" "}
        <div className="space-y-6 text-lg leading-relaxed">
          {" "}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {" "}
            I'm a Computer Science undergraduate driven by a strong interest in
            software development, particularly in web technologies. I enjoy
            building efficient, scalable, and user-focused applications using
            modern tools and frameworks.{" "}
          </p>{" "}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {" "}
            My focus has been on mastering frontend technologies like React,
            TypeScript, and Tailwind CSS, while also gaining hands-on experience
            with backend tools, version control systems, and deployment
            workflows. I continuously work on projects that challenge me to
            apply core development principles and explore real-world use cases.{" "}
          </p>{" "}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {" "}
            I'm currently expanding my understanding of full-stack development,
            contributing to open-source when possible, and staying up-to-date
            with the latest trends in the tech ecosystem. I value clean code,
            continuous learning, and building things that work well and solve
            problems.{" "}
          </p>{" "}
          <div className="mt-8 flex flex-wrap gap-3 justify-center text-sm">
            {" "}
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Nodejs",
              "Python",
              "C++",
              "Git",
              "GitHub",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/30 dark:bg-gray-700/50 backdrop-blur-md border border-white/20 dark:border-gray-600/50 text-blue-700 dark:text-blue-200 rounded-full shadow-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400/60"
              >
                {" "}
                {skill}{" "}
              </span>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>{" "}
    </section>
  );
}
