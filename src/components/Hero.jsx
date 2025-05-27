export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-tr from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Crafting the Web, One Pixel at a Time
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          I'm a web developer passionate about building responsive, user-friendly, and creative interfaces that stand out.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 transition-all"
        >
          View My Work
        </a>
      </div>

      {/* Optional subtle background graphic */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zm0 7l10 5-10 5-10-5 10-5zm0 7l10 5-10 5-10-5 10-5z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
