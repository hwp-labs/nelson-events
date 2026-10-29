import type { Metadata } from "next";
import { EventGallery } from "@/components/molecules/event-gallery";
import { CtaCard } from "@/components/molecules/cta-card";
//
import { Hero, OurServices, HowWeWork } from "@/components/species/home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurServices />
      <HowWeWork />
      <EventGallery />
      <CtaCard />
    </>
  );
}
