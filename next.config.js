/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
