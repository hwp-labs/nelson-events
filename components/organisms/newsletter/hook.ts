import { useState } from "react";
import { sendEmailAction } from "@/lib/nodemailer";
import { newsletterMail } from "@/lib/mails/newsletter-mail";
import { isValidEmail, sleep } from "@/utils";
import { MOCK } from "@/constants/MOCK";

const defaultValues = MOCK.newsletter.formData
  ? { email: "dehphantom@yahoo.com" }
  : { email: "" };

export function useNewsletter() {
  const [email, setEmail] = useState(defaultValues.email);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleSubmit = async () => {
    if (isValidEmail(email)) {
      const payload = {
        to: email,
        subject: newsletterMail.subject,
        body: newsletterMail.body,
      };
      setLoading(true);
      await sendEmailAction(payload);
      setLoading(false);

      setLoaded(true);
      await sleep(2);
      setLoaded(false);
      setEmail("");
    }
  };

  return { email, setEmail, loading, loaded, handleSubmit };
}
