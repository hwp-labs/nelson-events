import { useState } from "react";
import { useEmailAction } from "@/hooks/use-email-action";
import { contactUsMail } from "@/lib/mails/contact-us-mail";
import { MOCK } from "@/constants/MOCK";

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const defaultValues: FormDataType = {
  name: "",
  email: "",
  message: "",
};

const initialValues: FormDataType = MOCK.newsletter.formData
  ? {
      name: "John Doe",
      email: process.env.NEXT_PUBLIC_TEST_EMAIL!,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, deleniti provident magnam consectetur minima neque quidem repellat iusto nihil laudantium pariatur eveniet ea illum voluptatum ab distinctio minus, maiores at!",
    }
  : defaultValues;

export function useContactForm() {
  const [formData, setFormData] = useState<FormDataType>(initialValues);
  const { loading, loaded, handleSend } = useEmailAction();

  const canSubmit =
    !loading &&
    !loaded &&
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  const mutateFormData = (formData: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...formData }));
  };

  const handleSubmit = async () => {
    if (canSubmit) {
      handleSend(
        {
          to: formData.email,
          subject: contactUsMail.subject,
          body: contactUsMail.body(formData),
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
