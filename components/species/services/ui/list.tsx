import { data } from "./data";

export const List = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {data.map(({ Icon, ...item }, i) => (
          <article
            key={i}
            className="flex gap-6 rounded-2xl border border-[#ccc] bg-white p-8 transition hover:border-brand hover:bg-brand-card"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              <Icon className="size-7" aria-hidden />
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
