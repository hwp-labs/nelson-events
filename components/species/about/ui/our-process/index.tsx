import { WorkflowIcon } from "lucide-react";
import { SectionHeading } from "@/components/atoms/section-heading";
//
import { data } from "./data";

export const OurProcess = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeading Icon={WorkflowIcon}>Our Process</SectionHeading>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {data.map(({ Icon, ...item }, i) => (
          <article
            key={i}
            className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
          >
            <span className="bg-brand-soft flex size-14 shrink-0 items-center justify-center rounded-full">
              <Icon className="size-7 text-brand" aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-subtext">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
