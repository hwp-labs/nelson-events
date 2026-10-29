"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/shadcn/ui/carousel";

const images: string[] = Array.from(
  { length: 6 },
  (_, i) => `/images/gallery-${i + 1}.jpg`,
);

export const EventGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = (): void => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", slidesToScroll: 1 }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={item}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-1 w-8 rounded-full transition-colors ${
              index === current ? "bg-accent" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
