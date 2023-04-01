/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html'
            },
            {
                source: '/config.yml',
                destination: '/admin/config.yml'
            },
        ]
    }
}

module.exports = nextConfig
