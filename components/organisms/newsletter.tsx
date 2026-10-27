export function Newsletter() {
  return (
    <div>
      <h4 className="text-lg font-bold">Newsletter</h4>
      <p className="mt-4 text-white/80">
        Stay up to date with our latest news.
      </p>
      <form className="mt-4 flex gap-0">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Your email address"
          className="text-placeholder w-full rounded-l-sm bg-white px-5 py-3"
        />
        <button
          type="submit"
          className="rounded-r-sm bg-accent px-6 py-3 font-bold"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
