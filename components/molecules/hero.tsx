import Link from "next/link";
import { IMAGE } from "@/constants/IMAGE";
import { BookAppointmentButton } from "../atoms/book-appointment-button";

export function Hero() {
  return (
    <section className="relative h-[240px] w-full overflow-hidden lg:h-[840px]">
      {IMAGE.Home.Hero}
    </section>
  );
}

export function HeroWithText() {
  return (
    <section className="from-brand-soft to-cream bg-gradient-to-b">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-brand-dark mt-4 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            Care You Can Trust!
          </h1>
          <p className="mt-6 max-w-xl text-xl text-muted">
            Stay in the home you love, with the support you need. Home is where
            your memories, routines, and sense of belonging live. Jamie Home
            Care supports aging in place through compassionate personal care,
            companionship, and everyday assistance - helping you maintain your
            independence and dignity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BookAppointmentButton variant="hero" />
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-brand px-8 py-4 font-bold text-brand transition hover:bg-brand hover:text-white"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          {IMAGE.Home.Hero}
        </div>
      </div>
    </section>
  );
}
