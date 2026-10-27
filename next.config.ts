import type { NextConfig } from "next";
import { APP_DOMAIN } from "./constants/APP";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: APP_DOMAIN }],
        destination: `https://www.${APP_DOMAIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;