import Image from "next/image";

export const IMAGE = {
  Home: {
    Hero: (
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain object-bottom lg:object-cover"
      />
    ),
    AboutUs: (
      <Image
        src="/images/banner-2.jpeg"
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-right"
      />
    ),
  },
  AboutUs: (
    <Image
      src="/images/banner-3.jpg"
      alt="Caregiver and senior sharing a conversation"
      fill
      priority
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover"
    />
  ),
};
