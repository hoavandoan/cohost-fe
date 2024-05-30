import { config } from 'dotenv'
config()
/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@cohost/ui", "lucide-react"],
	typescript: {
		ignoreBuildErrors: true
	},
	env: {
		BASE_URL: process.env.BASE_URL
	}
};

export default nextConfig;
