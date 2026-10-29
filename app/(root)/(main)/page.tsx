import type { Metadata } from "next";
import { Hero } from "@/components/molecules/hero";
import { OurServices } from "@/components/molecules/our-services";
import { HowWeWork } from "@/components/molecules/how-we-work";
import { EventGallery } from "@/components/molecules/event-gallery";
import { CTACard } from "@/components/molecules/cta-card";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* <Hero />
      <OurServices />
      <HowWeWork />
      <EventGallery/> */}
      <CTACard />
    </>
  );
}
