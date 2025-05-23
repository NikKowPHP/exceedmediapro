import withBundleAnalyzer from "@next/bundle-analyzer";

// Dynamic import for performance config
import { PERFORMANCE_CONFIG } from "./src/config/performance.js";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const config = {
  // Image optimization
  images: {
    domains: [
      "localhost",
      "i.postimg.cc",
      "public.blob.vercel-storage.com",
      "6jnegrfq8rkxfevo.public.blob.vercel-storage.com",
    ],
    deviceSizes: PERFORMANCE_CONFIG.images.deviceSizes,
    imageSizes: PERFORMANCE_CONFIG.images.imageSizes,
    minimumCacheTTL: PERFORMANCE_CONFIG.images.minimumCacheTTL,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable compression
  compress: true,

  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    turbo: {
      rules: {
        "*.png": ["file-loader"],
        "*.svg": ["@svgr/webpack"],
        "*.jpg": ["file-loader"],
        "*.jpeg": ["file-loader"],
      },
      resolveAlias: {
        "@": "./src",
      },
    },
    optimizePackageImports: ["@heroicons/react", "clsx", "tailwind-merge"],
    webpackBuildWorker: true,
  },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: true,
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: "vendor",
              chunks: "all",
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            common: {
              name: "common",
              minChunks: 2,
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Headers optimization
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Powered by header removal & React strict mode
  poweredByHeader: false,
  reactStrictMode: true,
};

// Critters installation check
try {
  await import("critters");
} catch (e) {
  console.warn("Installing critters...");
  const { execSync } = await import("child_process");
  execSync("npm install critters", { stdio: "inherit" });
}

export default withAnalyzer(config);
