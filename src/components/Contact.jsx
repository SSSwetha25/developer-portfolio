import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqaqavdy", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-sky-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors px-6 py-20 overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>

      {/* Glassmorphism Contact Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/40 shadow-2xl rounded-3xl p-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
          Let's Connect
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
          Got a question, idea, or opportunity? Drop me a message below!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 border border-white/30 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 border border-white/30 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/10 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 border border-white/30 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:scale-105"
          >
            Send Message 🚀
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-green-500 text-lg font-medium transition-opacity duration-500">
            Thanks for reaching out! I’ll get back to you soon 💌
          </p>
        )}
      </div>
    </section>
  );
}
