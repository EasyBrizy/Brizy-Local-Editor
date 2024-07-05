const publicEditorIconsUrl = process.env["NEXT_PUBLIC_EDITOR_ICON_URL"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {

    console.log("publicEditorIconsUrl", publicEditorIconsUrl);

    return[
      {
        source: "/api/icons/:path*",
        destination: `${publicEditorIconsUrl}/:path*`,
      }
    ]
  }
};

export default nextConfig;
