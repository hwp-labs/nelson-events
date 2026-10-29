"use client";

import clsx from "clsx";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CtaButton } from "../atoms/cta-button";
import { usePathname } from "next/navigation";
import { MENU } from "@/constants/MENU";

export const Drawer = () => {
  const pathname = usePathname();

  return (
    <details className="group relative lg:hidden">
      <summary
        aria-label="Open menu"
        className="flex cursor-pointer list-none items-center rounded-md border p-2 [&::-webkit-details-marker]:hidden"
      >
        <Menu className="size-6" />
      </summary>
      <ul className="absolute right-0 mt-3 w-64 space-y-1 rounded-xl border bg-white p-3 shadow-lg">
        {MENU.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "hover:bg-brand-soft block rounded-md px-3 py-2 font-semibold",
                  isActive && "text-brand",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <CtaButton variant="drawer" />
        </li>
      </ul>
    </details>
  );
};
