import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  Accessibility,
  UserCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import { Banner } from "@/components/molecules/banner";
import { CTACard } from "@/components/molecules/cta-card";
import { IMAGE } from "@/constants/IMAGE";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: "About Us - Jamie Home Care",
  description:
    "Compassionate, individualized home care for seniors and individuals with disabilities in Kitchener, Waterloo, Cambridge, and surrounding communities.",
  alternates: { canonical: "/about" },
};

type Item = { title: string; text: string; icon: LucideIcon };

const WHY_CHOOSE: ReadonlyArray<Item> = [
  {
    title: "Guilt-Free Relief for Families",
    text: "We step in as your trusted partner so you can return to being a daughter, son, or family member instead of an exhausted full-time caregiver.",
    icon: Users,
  },
  {
    title: "Hands-On Expertise & Compassionate Care",
    text: "Experienced care professionals who understand daily hands-on care. We treat every client with compassionate and respect.",
    icon: HandHeart,
  },
  {
    title: "Personalized Care",
    text: "Support is tailored to the client’s routines, abilities and personal goals.",
    icon: HeartPulse,
  },
  {
    title: "Dignity and Independence",
    text: "We encourage clients to do what they can while providing assistance where needed.",
    icon: Accessibility,
  },
  {
    title: "Consistent & Reliable Caregivers",
    text: "Familiar caregivers help clients feel comfortable, secure and heard.",
    icon: UserCheck,
  },
  {
    title: "Flexible Support Options",
    text: "Our services can be adjusted as the client’s needs, routines or circumstances change.",
    icon: CalendarClock,
  },
];

const VALUES: ReadonlyArray<Item> = [
  {
    title: "Trust",
    text: "We show up on time, communicate openly, and uphold the highest standards of professional safety.",
    icon: ShieldCheck,
  },
  {
    title: "Dignity",
    text: "We honor every client's personal preferences, routines, and autonomy during every task.",
    icon: Scale,
  },
  {
    title: "Compassion",
    text: "We don't just complete tasks; we listen, build relationships, and bring warmth into every home.",
    icon: HeartHandshake,
  },
  {
    title: "Peace of Mind",
    text: "We lift the weight off family members' shoulders so they can rest knowing their loved one is in safe hands.",
    icon: Smile,
  },
];

export default function AboutPage() {
  return (
    <>
      <Banner current="About Us" title={APP.name} description={APP.title} />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="bg-brand-soft relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="text-2xl leading-[40px] [&>p]:mt-6">
          <p>
            <strong>{APP.name}</strong> offers {APP.description}.
          </p>
          <p>
            We specialize in creating seamless, thoughtfully executed
            experiences. We work with clients to design and deliver weddings,
            private celebrations, and corporate events that feel cohesive,
            intentional, and well-organized from start to finish. With a strong
            emphasis on structure, personalized service, and attention to
            detail, our event planning services are designed to guide clients
            through a clear and stress-free process. Every element is carefully
            considered to ensure a polished result that reflects your vision.
          </p>
          <Link
            href="/contact-us"
            className="hover:bg-brand-dark mt-8 inline-flex items-center rounded-full bg-brand px-8 py-4 font-semibold text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-soft py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Sparkles className="mx-auto size-10 text-accent" aria-hidden />
          <h2 className="text-brand-dark mt-5 text-3xl font-bold sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted">
            To empower seniors and individuals with disabilities to live rich,
            dignified, and independent lives at home, while giving families and
            primary caregivers complete peace of mind, free from stress,
            burnout, and guilt.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">
            Why Choose Jamie Home Care?
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {WHY_CHOOSE.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
            >
              <span className="bg-brand-soft flex size-14 shrink-0 items-center justify-center rounded-full">
                <Icon className="size-7 text-brand" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-brand-dark text-3xl font-bold sm:text-4xl">
            Our Core Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ title, text, icon: Icon }) => (
              <article key={title} className="border-l-4 border-brand pl-6">
                <Icon className="size-9 text-brand" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTACard />
    </>
  );
}
