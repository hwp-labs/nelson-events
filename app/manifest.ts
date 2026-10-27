import type { MetadataRoute } from "next";
import { APP } from "@/constants/APP";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP.name,
    short_name: APP.shortName,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#014874",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      // Remove this line if you do not have a 512x512 file in /public
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}