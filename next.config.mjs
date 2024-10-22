/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "cdn.sanity.io",
                port: "",
            }
        ]
    }
};

export default withVideos(nextConfig);

