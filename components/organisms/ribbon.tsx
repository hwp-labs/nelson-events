import { Clock, MapPin, Phone } from "lucide-react";
import { APP } from "@/constants/APP";

export const Ribbon = () => {
  return (
    <div className="hidden bg-brand text-sm text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <a
            href={APP.telHref}
            className="flex items-center gap-2 hover:underline"
          >
            <Phone className="size-4" /> {APP.tel}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" />
            {APP.address}
          </span>
        </div>
        <span className="flex items-center gap-2">
          <Clock className="size-4" />
          {APP.workHours}
        </span>
      </div>
    </div>
  );
};
