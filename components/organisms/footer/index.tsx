import { Logo } from "@/components/logo";
import { FooterAddress } from "./address";
import { FooterLinks } from "./links";
import { Newsletter } from "../newsletter";
import { Copyright } from "../copyright";


export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <Logo />
        <div className="items-center_ mx-auto mt-4 grid gap-10 md:grid-cols-3">
          <FooterAddress />
          <FooterLinks />
          <Newsletter />
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
