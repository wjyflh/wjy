const isProduction = process.env.BUILD_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProduction ? '/wjy/' : undefined,
}

module.exports = nextConfig
