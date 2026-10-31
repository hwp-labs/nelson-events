"use client";

import clsx from "clsx";
import { SpinnerBuffer } from "@/components/shadcn/ui/spinner";
//
import { useContactForm } from "./hook";

const inputStyles =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-black placeholder:placeholder focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aria-[invalid=true]:border-red-600";

export const ContactForm = () => {
  const { loading, loaded, formData, canSubmit, mutateFormData, handleSubmit } =
    useContactForm();

  return (
    <div className="card-ring-shadow bg-white p-8 sm:p-10 lg:col-span-3">
      <h2 className="text-brand-dark text-2xl font-bold">Send us a message</h2>
      <p className="text-sm text-blue-500">
        Fields marked with * are required.
      </p>
      <form className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-semibold">
              Full name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              value={formData.name}
              onChange={(ev) => mutateFormData({ name: ev.target.value })}
              placeholder="Enter your name"
              required
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-semibold">
              Email address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={(ev) => mutateFormData({ email: ev.target.value })}
              placeholder="Enter your email"
              required
              className={inputStyles}
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="message" className="font-semibold">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your event"
            value={formData.message}
            onChange={(ev) => mutateFormData({ message: ev.target.value })}
            rows={6}
            required
            className={inputStyles}
          />
          {/* {errors.message ? (
            <p id="message-error" className="mt-1 text-base text-red-700">
              {errors.message}
            </p>
          ) : null} */}
        </div>

        {/* Honeypot: hidden from people and screen readers */}
        <div className="absolute -left-[9999px]" aria-hidden>
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={clsx(
            "app-button rounded-full px-8 py-3",
            loading ? "bg-brand" : "bg-accent",
          )}
        >
          {loading && <SpinnerBuffer strokeWidth={3} />}
          {loading ? "Sending..." : loaded ? "Sent!" : "Send message"}
        </button>
      </form>
    </div>
  );
};
