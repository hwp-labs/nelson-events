import Link from "next/link";
import { MENU_FOOTER } from "@/constants/MENU";

export function FooterLinks() {
  return (
    <div>
      <h4 className="text-lg font-bold">Helpful links</h4>
      <ul className="mt-4 space-y-2">
        {MENU_FOOTER.map((item, i) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="text-white/80 hover:text-white hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
