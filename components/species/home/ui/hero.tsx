import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-[240px] w-full overflow-hidden lg:h-[840px]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain object-bottom lg:object-cover"
      />
    </section>
  );
};
