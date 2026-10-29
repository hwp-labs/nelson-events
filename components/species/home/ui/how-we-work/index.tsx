import { SectionHeading } from "@/components/atoms/section-heading";
// 
import data from "./data.json";

export const HowWeWork = () => {
  return (
    <section className="bg-brand-soft py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading>How We Work</SectionHeading>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {data.map((item, i) => (
            <li
              key={i}
              className="rounded-2xl bg-brand-card p-8 text-center shadow-sm"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-2xl font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-subtext">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
