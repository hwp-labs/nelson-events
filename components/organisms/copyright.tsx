import { APP } from "@/constants/APP";

export function Copyright() {
  return (
    <div className="border-t border-white/15 py-5 text-sm text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {APP.name}. All rights reserved.
        </p>
        <p>Since Sept 30th, 2026</p>
      </div>
    </div>
  );
}
