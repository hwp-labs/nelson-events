import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PATH } from "@/constants/PATH";

interface Props {
  variant?: "header" | "drawer" | "hero";
}

export const BookAppointmentButton = ({ variant }: Props) => {
  return (
    <Link
      href={PATH.contact}
      className={clsx({
        "hidden rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:inline-block":
          variant === "header",
        "mt-2 block rounded-full bg-accent px-3 py-3 text-center font-bold text-white":
          variant === "drawer",
        "inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-white shadow transition hover:brightness-95":
          variant === "hero",
      })}
    >
      Book Consultation
      {variant === "hero" && <ArrowRight className="size-5" />}
    </Link>
  );
};
