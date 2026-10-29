import { PropsWithChildren } from "react";

export const SectionHeading = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-center text-3xl font-extrabold text-brand sm:text-4xl">
      {children}
    </h2>
  );
};
