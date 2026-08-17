export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-6 border-t border-surface/20 pt-10 max-w-xl"
    >
      <div>
        <h2 className="text-xs uppercase tracking-widest font-mono text-accent/80 font-semibold">
          Get In Touch
        </h2>
        <p className="text-sm opacity-70 leading-relaxed mt-2">
          No urgent pings. No automated chatbots. Send me a message directly or
          connect on community platforms asynchronously.
        </p>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-4 bg-surface/15 p-5 rounded-lg border border-surface/40"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider opacity-60 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Andy"
              className="w-full bg-obsidian border border-surface/60 rounded px-3 py-2 text-xs focus:outline-none focus:border-accent/80 text-white placeholder:opacity-30 font-mono transition-all"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-mono tracking-wider opacity-60 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="andy@example.com"
              className="w-full bg-obsidian border border-surface/60 rounded px-3 py-2 text-xs focus:outline-none focus:border-accent/80 text-white placeholder:opacity-30 font-mono transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase font-mono tracking-wider opacity-60 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Share your thoughts, feedback, or ideas..."
            className="w-full bg-obsidian border border-surface/60 rounded px-3 py-2 text-xs focus:outline-none focus:border-accent/80 text-white placeholder:opacity-30 font-mono transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-surface/60 hover:bg-surface text-white text-xs uppercase font-mono tracking-widest py-2.5 rounded border border-surface hover:border-accent/40 transition-all cursor-pointer"
        >
          Send Message
        </button>
      </form>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="https://x.com/the_peaceful_de"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-surface/30 border border-surface/60 hover:border-accent/50 text-white text-xs font-mono rounded transition-all"
        >
          Follow me on X
        </a>
        <a
          href="https://www.reddit.com/user/the-peaceful-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-surface/30 border border-surface/60 hover:border-accent/50 text-white text-xs font-mono rounded transition-all"
        >
          Join me on Reddit
        </a>
      </div>
    </section>
  );
}
