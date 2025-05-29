export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 px-4 text-center bg-gradient-to-br from-gray-900"
    >
      <h2 className="text-4xl font-bold text-white mb-10">Contact Me</h2>

      <form
        id="contactForm"
        method="POST"
        action="https://formspree.io/f/mqaqavdy"  // Replace with your actual Formspree endpoint
        className="bg-white/5 p-8 rounded-2xl backdrop-blur-md max-w-md mx-auto flex flex-col gap-4 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all font-semibold"
        >
          Send
        </button>
      </form>

      <p
        id="thankYouMessage"
        className="mt-6 text-lg text-green-400 opacity-0 transition-opacity duration-500"
      >
        Thanks for contacting me! 🚀
      </p>
    </section>
  );
}
