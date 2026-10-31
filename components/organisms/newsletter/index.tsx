"use client";

import clsx from "clsx";
import { SpinnerBuffer } from "@/components/shadcn/ui/spinner";
//
import { useNewsletter } from "./hook";

export const Newsletter = () => {
  const { loading, loaded, formData, canSubmit, mutateFormData, handleSubmit } =
    useNewsletter();

  return (
    <div>
      <h4 className="text-lg font-bold">Newsletter</h4>
      <p className="mt-4 text-white/80">
        Stay up to date with our latest news.
      </p>
      <form className="mt-4 flex gap-0">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(ev) => mutateFormData({ email: ev.target.value })}
          placeholder="Your email address"
          required
          className="placeholder:placeholder w-full rounded-l-sm border border-black/15 bg-white px-4 py-3 text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aria-[invalid=true]:border-red-600"
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={clsx(
            "app-button rounded-r-sm px-6 py-3",
            loading ? "bg-brand" : "bg-accent",
          )}
        >
          {loading && <SpinnerBuffer strokeWidth={3} />}
          {loading ? "Subscribing..." : loaded ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </div>
  );
};
