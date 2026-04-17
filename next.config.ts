import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    'https://preview-chat-e21f7c8d-6986-48be-a30d-d98d742d87b7.space.z.ai',
  ],
};

export default nextConfig;
