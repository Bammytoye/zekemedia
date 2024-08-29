/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**', // Allowing all paths from this hostname
            },
        ],
    },
};

export default nextConfig;
