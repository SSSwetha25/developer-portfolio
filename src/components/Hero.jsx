export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-sky-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors px-6 py-20 overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 max-w-3xl w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 shadow-2xl rounded-3xl p-10 text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Swetha</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          I'm a web developer passionate about building clean, responsive, and creative interfaces that leave a lasting impression.
        </p>
        <a
          href="/projects"
          className="inline-block px-10 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-500 transform transition-all duration-300"
        >
          🚀 View My Work
        </a>
      </div>
    </section>
  );
}
