import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages:["ui"]//after adding this go to root folder and yarn install 
};

export default nextConfig;
