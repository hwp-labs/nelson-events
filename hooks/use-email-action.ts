import { useState } from "react";
import { NodemailerRequestDto, sendEmailAction } from "@/lib/nodemailer";
import { sleep } from "@/utils";

export function useEmailAction() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleSend = async (
    payload: NodemailerRequestDto,
    next?: () => void,
  ) => {
    setLoading(true);
    await sendEmailAction(payload);
    setLoading(false);

    next?.();

    setLoaded(true);
    await sleep(1);
    setLoaded(false);
  };

  return { loading, loaded, handleSend };
}
