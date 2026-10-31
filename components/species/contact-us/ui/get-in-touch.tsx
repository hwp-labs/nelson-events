import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { APP, APP_ADDRESS } from "@/constants/APP";

const data = [
  {
    Icon: PhoneIcon,
    label: "Telephone",
    value: APP.tel,
    href: APP.telHref,
  },
  {
    Icon: MailIcon,
    label: "Email Address",
    value: APP.email,
    href: APP.mailto,
  },
  {
    Icon: MapPinIcon,
    label: "Office Address",
    value: APP_ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_ADDRESS)}`,
  },
  {
    Icon: ClockIcon,
    label: "Business Hours",
    value: APP.workHours,
  },
];

export const GetInTouch = () => {
  return (
    <div className="lg:col-span-2">
      <ul className="space-y-6">
        {data.map(({ Icon, ...item }, i) => (
          <li key={i} className="flex items-start gap-4 bg-white p-5 card-ring-shadow">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              <Icon className="size-6" aria-hidden />
            </span>
            <div>
              <p className="text-base font-semibold">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-subtext underline-offset-4 hover:text-brand hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-subtext">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
