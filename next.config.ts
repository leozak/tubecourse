import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // port: "",
        protocol: "https",
        hostname: "i.ytimg.com",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
