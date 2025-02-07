/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase the limit (adjust as needed)
    },
  },
  images: {
    domains: [
      "pub-ed59ee176be149e893b12576a3e22bd3.r2.dev",
      "pub-c55068322f5b44c1a176a629c174b66c.r2.dev",
      "lh3.googleusercontent.com",
    ], // Add your R2 domain here
  },
};

export default nextConfig;
