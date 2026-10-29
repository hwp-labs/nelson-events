import type { Metadata } from "next";
import { Banner } from "@/components/molecules/banner";
import { EventGallery } from "@/components/molecules/event-gallery";
import { CtaCard } from "@/components/molecules/cta-card";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
//
import { Hero, OurMission, OurProcess } from "@/components/species/about";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: PATH.about },
};

export default function AboutPage() {
  return (
    <>
      <Banner current="About Us" title={APP.name} description={APP.title} />
      <Hero />
      <OurMission />
      <OurProcess />
      <EventGallery />
      <CtaCard />
    </>
  );
}
