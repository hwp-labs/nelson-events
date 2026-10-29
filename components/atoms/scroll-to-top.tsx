"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-lg bg-accent text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/70 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ChevronUpIcon className="size-6" aria-hidden />
    </button>
  );
};
