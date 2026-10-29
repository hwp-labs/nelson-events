import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/atoms/section-heading";
import { PATH } from "@/constants/PATH";
import { Article } from "./article";

import  data from "./data.json";

export const OurServices = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading>Our Services</SectionHeading>
      </div>
      {data.map((item, i) => {
        const isOdd = Boolean((i + 1) % 2);

        const renderImage = (
          <div className="bg-brand-soft relative aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        );

        const renderContent = (
          <div>
            <p className="font-bold tracking-widest text-brand uppercase">
              {item.title}
            </p>
            <h2 className="text-brand-dark mt-3 text-3xl font-extrabold sm:text-4xl">
              {item.description}
            </h2>
            <ul className="mt-8 space-y-4">
              {item.details.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-6 shrink-0 text-brand" />
                  <span className="text-subtext">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={PATH.services}
              className="hover:bg-brand-dark mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-bold text-white transition"
            >
              Learn More <ArrowRight className="size-5" />
            </Link>
          </div>
        );

        return (
          <Article
            key={i}
            renderImage={renderImage}
            renderContent={renderContent}
            isOdd={isOdd}
          />
        );
      })}
    </section>
  );
};
