import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Content-Security-Policy. 'unsafe-inline' scripts are needed for Next's inline
// bootstrap and the theme script; 'wasm-unsafe-eval' + blob: workers are
// needed by <model-viewer>'s Draco decoder. Production only, because the dev
// server relies on eval for fast refresh.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' data: blob:",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Public files keep the same URL when they change, so they must not be
// cached as immutable. Cache for a day and refresh in the background.
const publicAssetCache = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  // Enable modern image formats for better compression
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
        ],
      },
      {
        source:
          "/:path*\\.(jpg|jpeg|png|gif|webp|avif|ico|svg|woff|woff2|glb|wasm|pdf)",
        headers: [{ key: "Cache-Control", value: publicAssetCache }],
      },
      {
        source: "/draco/:path*",
        headers: [{ key: "Cache-Control", value: publicAssetCache }],
      },
    ];
  },

  compress: true,
};

export default nextConfig;
