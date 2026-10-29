import type { Metadata } from "next";
import { Banner } from "@/components/molecules/banner";
import { EventGallery } from "@/components/molecules/event-gallery";
import { CtaCard } from "@/components/molecules/cta-card";
import { PATH } from "@/constants/PATH";
//
import { List } from "@/components/species/services";

export const metadata: Metadata = {
  title: "Our Services",
  alternates: { canonical: PATH.services },
};

export default function ServicesPage() {
  return (
    <>
      <Banner
        current="Our Services"
        title="Our Services"
        description="End-to-end event planning, tailored to your vision."
      />

      <List />
      <EventGallery />
      <CtaCard
        title="Not sure which services you need?"
        description="Book a consultation and let us help plan the right event."
      />
    </>
  );
}
