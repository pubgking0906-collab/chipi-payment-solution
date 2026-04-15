import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/chipi-payment-solution",
  assetPrefix: "/chipi-payment-solution",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
