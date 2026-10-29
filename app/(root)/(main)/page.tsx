import type { Metadata } from "next";
import { FillImage } from "@/components/atoms/fill-image";
import { EventGallery } from "@/components/molecules/event-gallery";
import { CtaCard } from "@/components/molecules/cta-card";
import { PATH } from "@/constants/PATH";
//
import { OurServices, HowWeWork } from "@/components/species/home";

export const metadata: Metadata = {
  alternates: { canonical: PATH.home },
};

export default function HomePage() {
  return (
    <>
      <FillImage src="/images/hero.jpg" priority />
      <OurServices />
      <HowWeWork />
      <EventGallery />
      <CtaCard />
    </>
  );
}
