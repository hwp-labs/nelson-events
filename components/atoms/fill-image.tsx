import Image from "next/image";

interface Props {
  src: string;
  priority?: boolean;
}

export const FillImage = ({ src, priority }: Props) => {
  return (
    <section className="relative h-[240px] w-full overflow-hidden lg:h-[840px]">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain object-bottom lg:object-cover"
      />
    </section>
  );
};
