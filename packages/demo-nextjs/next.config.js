const publicEditorIconsUrl = process.env["NEXT_PUBLIC_EDITOR_ICON_URL"];

const env = process.env;
const IS_PRODUCTION = env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/extensions/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: IS_PRODUCTION ? "https" : "http",
        hostname: "localhost",
      },
    ],
  },
  rewrites() {
    return [
      {
        source: "/api/icons/:path*",
        destination: `${publicEditorIconsUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
