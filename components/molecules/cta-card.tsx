import Link from "next/link";
import { BookAppointmentButton } from "../atoms/book-appointment-button";
import { APP } from "@/constants/APP";

type Props = {
  title?: string;
  description?: string;
};

export function CTACard({
  title = "Ready to plan your event?",
  description = `Our team is available ${APP.workHours}`,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[2rem] bg-brand px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <BookAppointmentButton variant="hero" />
          <Link
            href={APP.telHref}
            className="rounded-full bg-white px-8 py-4 font-semibold text-brand transition"
          >
            Call {APP.tel}
          </Link>
        </div>
      </div>
    </section>
  );
}
