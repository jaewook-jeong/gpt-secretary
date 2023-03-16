/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	disable: process.env.NODE_ENV === "development",
	dest: "public",
	register: true,
	skipWaiting: false,
  });
  const nextConfig = withPWA({
		images: {
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 'avatars.githubusercontent.com',
					port: '',
					pathname: '/u/**',
				},
			],
		},
	});
  
  module.exports = nextConfig;