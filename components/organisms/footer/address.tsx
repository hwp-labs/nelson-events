import { Mail, MapPin, Phone } from "lucide-react";
import { APP } from "@/constants/APP";

export function FooterAddress() {
  return (
    <ul className="space-y-3.5 text-white/90">
      <li className="flex items-center gap-3">
        <MapPin className="-mt-4 size-4 min-w-4" />
        {APP.address}
      </li>
      <li className="flex items-center gap-3">
        <Phone className="size-4 min-w-4" />
        <a href={APP.telHref} className="hover:underline">
          {APP.tel}
        </a>
      </li>
      <li className="flex items-center gap-3">
        <Mail className="size-4 min-w-4" />
        <a href="mailto:info@jamiehomecare.ca" className="hover:underline">
          {APP.email}
        </a>
      </li>
    </ul>
  );
}
