import Link from "next/link";
import { Nav } from "./nav";
import { Drawer } from "./drawer";
import { Logo } from "../logo";
import { Ribbon } from "./ribbon";
import { BookAppointmentButton } from "../atoms/book-appointment-button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <Ribbon />
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0"
      >
        <Logo />
        <Nav />
        <BookAppointmentButton variant="header"/>
        <Drawer />
      </nav>
    </header>
  );
}
