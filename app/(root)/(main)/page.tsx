import type { Metadata } from "next";
import { EventGallery } from "@/components/molecules/event-gallery";
import { CtaCard } from "@/components/molecules/cta-card";
import { PATH } from "@/constants/PATH";
//
import { Hero, OurServices, HowWeWork } from "@/components/species/home";

export const metadata: Metadata = {
  alternates: { canonical: PATH.home },
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
