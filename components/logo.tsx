import Link from "next/link";
import Image from "next/image";
import { PATH } from "@/constants/PATH";

export const Logo = () => {
  return (
    <Link href={PATH.home} className="flex items-center gap-1">
      <Image src="/icon.png" alt="" width={80} height={80} />
      <div className="flex flex-col leading-none">
        <span className="text-3xl font-extrabold tracking-tight text-brand">
          Nelson&apos;s
        </span>
        <span className="lg:text-[12px] text-[10px] font-semibold tracking-[0.25em] text-accent uppercase">
          Event Planning Corp.
        </span>
      </div>
    </Link>
  );
};
