import { useState } from "react";
import { NodemailerRequestDto, sendEmailAction } from "@/lib/nodemailer";
import { sleep } from "@/utils";

export function useEmailAction() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleSend = async (payload: NodemailerRequestDto) => {
    setLoading(true);
    await sendEmailAction(payload);
    setLoading(false);

    setLoaded(true);
    await sleep(2);
    setLoaded(false);
  };

  return { loading, loaded, handleSend };
}
