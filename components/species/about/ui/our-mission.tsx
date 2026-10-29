import { SparklesIcon, TargetIcon } from "lucide-react";
import { SectionHeading } from "@/components/atoms/section-heading";

export const OurMission = () => {
  return (
    <section className="bg-brand-soft py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading Icon={TargetIcon}>Our Mission</SectionHeading>
        <p className="mt-4 text-lg text-subtext">
          To turn your vision into unforgettable events, from weddings to office
          parties and concerts, while giving you complete peace of mind, free
          from stress, last-minute surprises, and overwhelm.
        </p>
      </div>
    </section>
  );
};
