/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@cohost/ui", "lucide-react"],
	typescript: {
		ignoreBuildErrors: true
	}
};

export default nextConfig;
