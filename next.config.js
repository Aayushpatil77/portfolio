/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [{
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
        }]
    }
}

module.exports = nextConfig
