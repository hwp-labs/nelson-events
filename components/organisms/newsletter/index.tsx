"use client";

import clsx from "clsx";
import { useState } from "react";
import { SpinnerBuffer } from "@/components/shadcn/ui/spinner";
import { useEmailAction } from "@/hooks/use-email-action";
import { newsletterMail } from "@/lib/mails/newsletter-mail";
import { MOCK } from "@/constants/MOCK";

const defaultValues = MOCK.newsletter.formData
  ? { email: "dehphantom@yahoo.com" }
  : { email: "" };

export function Newsletter() {
  const [email, setEmail] = useState(defaultValues.email);
  const { loading, loaded, handleSend } = useEmailAction();

  const handleSubscribe = async () => {
    handleSend({
      to: email,
      subject: newsletterMail.subject,
      body: newsletterMail.body,
    });
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
          onClick={handleSubscribe}
          className={clsx(
            "flex cursor-pointer items-center gap-1 rounded-r-sm px-6 py-3 font-bold",
            loading ? "bg-brand" : "bg-accent",
          )}
        >
          {loading && <SpinnerBuffer strokeWidth={3} />}
          {loaded ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
