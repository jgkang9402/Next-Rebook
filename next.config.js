/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/ttb/:path*",
        destination: "http://www.aladin.co.kr/ttb/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.aladin.co.kr/**",
      },
    ],
  },
};

module.exports = nextConfig;
