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
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.safe2pay.com.br',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
