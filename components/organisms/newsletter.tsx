"use client";

import { useState } from "react";
import { SpinnerBuffer } from "@/components/shadcn/ui/spinner";
import { sleep } from "@/utils";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleSubmit = async () => {
    if (email.trim().length > 0) {
      setLoading(true);
      await sleep(2);
      setLoading(false);

      setLoaded(true);
      await sleep(2);
      setLoaded(false);
      setEmail("");
    }
  };

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
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="Your email address"
          required
          className="w-full rounded-l-sm bg-white px-5 py-3 text-placeholder"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="flex cursor-pointer items-center gap-1 rounded-r-sm bg-accent px-6 py-3 font-bold"
        >
          {loading && <SpinnerBuffer strokeWidth={3} />}
          {loaded ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
