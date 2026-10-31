import { useState } from "react";
import { useEmailAction } from "@/hooks/use-email-action";
import { newsletterMail } from "@/lib/mails/newsletter-mail";
import { MOCK } from "@/constants/MOCK";

type FormDataType = {
  email: string;
};

const defaultValues: FormDataType = {
  email: "",
};

const initialValues: FormDataType = MOCK.newsletter.formData
  ? {
      email: process.env.NEXT_PUBLIC_SMTP_USER!,
    }
  : defaultValues;

export function useNewsletter() {
  const { loading, loaded, handleSend } = useEmailAction();
  const [formData, setFormData] = useState<FormDataType>(initialValues);

  const canSubmit = !loading && !loaded && formData.email.trim().length > 0;

  const mutateFormData = (formData: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const handleSubmit = async () => {
    if (canSubmit) {
      await handleSend(
        {
          to: formData.email,
          subject: newsletterMail.subject,
          body: newsletterMail.body,
        },
        () => {
          setFormData(defaultValues);
        },
      );
    }
  };

  return {
    loading,
    loaded,
    formData,
    canSubmit,
    mutateFormData,
    handleSubmit,
  };
}
