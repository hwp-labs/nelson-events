export const PATH = {
  nil: "#",
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/#contact-us",
} as const;

// sitemap
export const PATHS: ReadonlyArray<string> = [
  "/",
  "/about",
  "/services",
  "/contact-us",
];