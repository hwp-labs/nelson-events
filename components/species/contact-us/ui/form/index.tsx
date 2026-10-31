"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContact, type ContactState } from "./actions";

const INITIAL_STATE: ContactState = { status: "idle" };

const INPUT =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-ink placeholder:text-placeholder focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aria-[invalid=true]:border-red-600";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    INITIAL_STATE,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="bg-brand-soft mt-8 flex items-start gap-4 rounded-2xl p-6"
      >
        <CheckCircle2 className="mt-1 size-7 shrink-0 text-brand" aria-hidden />
        <div>
          <h3 className="text-brand-dark text-xl font-semibold">
            Thank you, your message is on its way
          </h3>
          <p className="mt-1 text-muted">
            We will get back to you as soon as we can.
          </p>
        </div>
      </div>
    );
  }

  const errors = state.status === "error" ? state.fieldErrors : {};
  const values = state.status === "error" ? state.values : undefined;

  return (
    <div className="card-ring-shadow bg-white p-8 sm:p-10 lg:col-span-3">
      <h2 className="text-brand-dark text-2xl font-bold">Send us a message</h2>
      <p className="text-sm text-blue-500">
        Fields marked with * are required.
      </p>
      <form action={formAction} noValidate className="mt-8 space-y-6">
        {state.status === "error" ? (
          <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-800">
            {state.message}
          </p>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-semibold">
              Full name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter your name"
              required
              defaultValue={values?.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={INPUT}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1 text-base text-red-700">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">
              Email address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              defaultValue={values?.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={INPUT}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1 text-base text-red-700">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="">
          <label htmlFor="message" className="font-semibold">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your event"
            rows={6}
            required
            defaultValue={values?.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={INPUT}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-base text-red-700">
              {errors.message}
            </p>
          ) : null}
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
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 font-semibold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
