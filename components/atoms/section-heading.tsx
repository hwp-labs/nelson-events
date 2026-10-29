import { PropsWithChildren } from "react";
import type { LucideIcon } from "lucide-react";

interface Props extends PropsWithChildren {
  Icon?: LucideIcon;
}

export const SectionHeading = ({ children, Icon }: Props) => {
  return (
    <>
      {Icon ? (
        <Icon className="mx-auto mb-5 size-10 text-accent" aria-hidden />
      ) : null}
      <h2 className="text-center text-3xl font-extrabold text-brand sm:text-4xl">
        {children}
      </h2>
    </>
  );
};
