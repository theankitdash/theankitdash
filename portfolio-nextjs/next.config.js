/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better debugging and future-proofing
    reactStrictMode: true,

    // Optimize production builds
    compiler: {
        // Remove console.log in production (keep errors and warnings)
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // Optimize images with modern formats
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.com',
            },
            {
                protocol: 'https',
                hostname: 'cdninstagram.com',
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Enable compression
    compress: true,

    // Performance optimizations
    poweredByHeader: false,
}

module.exports = nextConfig

