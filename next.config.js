/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	disable: process.env.NODE_ENV === "development",
	dest: "public",
	register: true,
	skipWaiting: false,
  });
  const nextConfig = withPWA({});
  
  module.exports = nextConfig;