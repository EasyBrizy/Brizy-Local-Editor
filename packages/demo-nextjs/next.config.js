const publicEditorIconsUrl = process.env["NEXT_PUBLIC_EDITOR_ICON_URL"];

const env = process.env;
const IS_PRODUCTION = env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: IS_PRODUCTION ? "https" : "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
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
