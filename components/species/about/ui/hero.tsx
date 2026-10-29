import Image from "next/image";
import { APP } from "@/constants/APP";

export const Hero = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="[&>p]:mt-4">
        <p className="text-[22px] leading-[34px]">
          <strong>{APP.name}</strong> offers {APP.description}.
        </p>
        <p className="text-xl leading-[32px]">
          We specialize in creating seamless, thoughtfully executed experiences.
          We work with clients to design and deliver weddings, private
          celebrations, and corporate events that feel cohesive, intentional,
          and well-organized from start to finish. With a strong emphasis on
          structure, personalized service, and attention to detail, our event
          planning services in Barbados are designed to guide clients through a
          clear and stress-free process. Every element is carefully considered
          to ensure a polished result that reflects your vision.
        </p>
      </div>
    </section>
  );
};
