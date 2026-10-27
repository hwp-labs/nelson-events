import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HandHeart,
  HeartHandshake,
  Home,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { APP } from "@/constants/APP";
import { IMAGE } from "@/constants/IMAGE";
import { CTACard } from "@/components/molecules/cta-card";
import { Hero } from "@/components/molecules/hero";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

type Item = { title: string; text: string; icon: LucideIcon };

const TRUST: ReadonlyArray<Item> = [
  {
    title: "Round-the-clock watch",
    text: "A caregiver is always nearby, day and night.",
    icon: HeartHandshake,
  },
  {
    title: "Trained, vetted staff",
    text: "Every caregiver is certified and background-checked.",
    icon: ShieldCheck,
  },
  {
    title: "A real home setting",
    text: "Comfortable rooms, home-cooked meals, familiar routines.",
    icon: Home,
  },
];

const SERVICES: ReadonlyArray<Item> = [
  {
    title: "Personal Care",
    text: "Dignified help with bathing, dressing and daily routines.",
    icon: HandHeart,
  },
  {
    title: "Companionship",
    text: "Friendly conversation, activities and company every day.",
    icon: Users,
  },
  {
    title: "Meal Prep & Feeding",
    text: "Light cooking and feeding.",
    icon: Utensils,
  },
  {
    title: "Medication Reminders",
    text: "Gentle support to keep medication on schedule.",
    icon: Pill,
  },
  {
    title: "Health Monitoring",
    text: "Attentive caregivers who notice changes and report them.",
    icon: Stethoscope,
  },
  {
    title: "Home Care & Cleaning",
    text: "House keeping.",
    icon: ClipboardList,
  },
];

const STEPS: ReadonlyArray<{ title: string; text: string }> = [
  { title: "Get in touch", text: "Call us or book an appointment online." },
  {
    title: "Meet and plan",
    text: "We learn about your loved one and build a care plan.",
  },
  {
    title: "Settle in",
    text: "Your family member receives warm, steady care.",
  },
];

const POINTS: ReadonlyArray<string> = [
  "Certified, background-checked caregivers",
  "Support for seniors and individuals with disabilities",
  "Care plans shaped around each person",
  "Open every day of the week",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold tracking-widest text-brand uppercase">
              What we offer
            </p>
            <h2 className="text-brand-dark mt-3 text-3xl font-extrabold sm:text-4xl">
              Our Services
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="group bg-cream rounded-2xl border border-black/5 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-subtext">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-brand hover:underline"
            >
              View all services <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="bg-brand-soft relative aspect-square overflow-hidden rounded-3xl shadow-lg">
          {IMAGE.Home.AboutUs}
        </div>
        <div>
          <p className="font-bold tracking-widest text-brand uppercase">
            Why families choose us
          </p>
          <h2 className="text-brand-dark mt-3 text-3xl font-extrabold sm:text-4xl">
            Compassion first, always
          </h2>
          <ul className="mt-8 space-y-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-6 shrink-0 text-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="hover:bg-brand-dark mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-bold text-white transition"
          >
            About Us <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-brand-dark text-center text-3xl font-extrabold sm:text-4xl">
            How it works
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-subtext">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTACard />
    </>
  );
}
