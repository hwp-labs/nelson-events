import { Mail, MapPin, Phone } from "lucide-react";
import { FooterLinks } from "./footer-links";
import { Newsletter } from "./newsletter";
import { Copyright } from "./copyright";
import { APP } from "@/constants/APP";
import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="flex-col flex">
        <Logo />
        <span className="text-sm text-subtext-dark">Operational since September 30th, 2026</span>
      </div>
        <div className="mx-auto grid gap-10 md:grid-cols-3 mt-4">
          <ul className="space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <MapPin className="-mt-4 size-4 min-w-4" />
              {APP.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 min-w-4" />
              <a href={APP.telHref} className="hover:underline">
                {APP.tel}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 min-w-4" />
              <a
                href="mailto:info@jamiehomecare.ca"
                className="hover:underline"
              >
                {APP.email}
              </a>
            </li>
          </ul>
          <FooterLinks />
          <Newsletter />
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
