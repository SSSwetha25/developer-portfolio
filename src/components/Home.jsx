// src/pages/Home.jsx or inside your landing section
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          A passionate Web Developer who loves crafting sleek, responsive, and user-friendly websites.
        </p>
        <Link
  to="Projects.jsx"
  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition-all"
>
          View My Work <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Image / Illustration */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/00000000?v=4" // Replace with your own image or an animated SVG
          alt="Developer"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-200 dark:border-blue-800"
        />
      </div>
    </section>
  );
}
