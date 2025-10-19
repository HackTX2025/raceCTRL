import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src", "app"],
  },
};

export default nextConfig;
