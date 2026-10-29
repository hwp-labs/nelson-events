"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";

interface Props {
  renderImage: React.ReactNode;
  renderContent: React.ReactNode;
  isOdd?: boolean;
}

export const Article = ({ renderImage, renderContent, isOdd }: Props) => {
  const isMobile = useIsMobile();

  return (
    <article className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
      {!isMobile && isOdd ? (
        <>
          {renderImage}
          {renderContent}
        </>
      ) : (
        <>
          {renderContent}
          {renderImage}
        </>
      )}
    </article>
  );
};
