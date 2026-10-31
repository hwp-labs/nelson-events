import type { Metadata } from "next";
import { Banner } from "@/components/molecules/banner";
import { FillImage } from "@/components/atoms/fill-image";
import { PATH } from "@/constants/PATH";
//
import { GetInTouch, ContactForm } from "@/components/species/contact-us";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: PATH.contact },
};

export default function ContactPage() {
  return (
    <>
      <Banner
        current="Contact Us"
        title="Contact Us"
        description="Call, email or send us a message."
      />
      <section className="hidden mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5">
        <GetInTouch />
        <ContactForm />
      </section>
      {/* <FillImage src="/images/map.jpg" /> */}
    </>
  );
}
